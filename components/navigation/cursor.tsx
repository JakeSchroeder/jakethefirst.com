import { Box } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";

const Cursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const prevCursorPos = useRef({
    x: 0,
    y: 0,
  });
  function lerp(start: number, end: number, amt: number) {
    return (1 - amt) * start + amt * end;
  }

  useEffect(() => {
    let links = document.getElementsByTagName("a");

    if (links.length) {
      [...links].map((link) => {
        link.addEventListener("mouseover", () => {
          setIsHovering(true);
        });
        link.addEventListener("mouseleave", () => {
          setIsHovering(false);
        });
      });
    }

    document.addEventListener("mousemove", (e) => {
      requestAnimationFrame(() => {
        if (cursorRef.current)
          cursorRef.current.setAttribute(
            "style",
            `transform: translate3d(${lerp(prevCursorPos.current.x, e.clientX - 24, 0.001)}px, ${lerp(
              prevCursorPos.current.y,
              e.clientY - 24,
              0.001
            )}px, 0px)`
          );
      });

      prevCursorPos.current = {
        x: e.clientX - 24,
        y: e.clientY - 24,
      };
    });
    return () => document.removeEventListener("mousemove", () => {});
  }, []);
  return (
    <Box
      display={{ base: "none", xl: "block" }}
      top="0"
      left="0"
      pointerEvents="none"
      position="fixed"
      w={isHovering ? "68px" : "48px"}
      h={isHovering ? "68px" : "48px"}
      borderRadius="50%"
      bg="transparent"
      borderWidth="2px"
      borderColor={isHovering ? "brand" : "#c9c9c9"}
      as="div"
      ref={cursorRef}
      transition=" height .3s, width .3s"
      transitionTimingFunction="ease-in-out"
    />
  );
};

export default Cursor;
