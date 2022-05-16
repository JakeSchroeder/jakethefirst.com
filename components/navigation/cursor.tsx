import { Box } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";

const Cursor: FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  // const [isLoaded, setIsLoaded] = useState(false);
  // const prevCursorPos = useRef({
  //   x: window?.innerWidth / 2,
  //   y: window?.innerHeight / 2,
  // });
  // function lerp(start: number, end: number, amt: number) {
  //   return (1 - amt) * start + amt * end;
  // }

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
            `transform: translate3d(${e.clientX - 24}px, ${e.clientY - 24}px, 0px); top: 0; left: 0; opacity: 1;`
          );
      });
    });

    // setIsLoaded(true);

    return () => document.removeEventListener("mousemove", () => {});
  }, []);
  return (
    <Box
      opacity={0}
      top="50%"
      left="50%"
      display={{ base: "none", xl: "block" }}
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
      transition="opacity .3s, height .3s, width .3s"
      transitionTimingFunction="ease-in-out"
    />
  );
};

export default Cursor;
