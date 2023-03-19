import { v4 as uuid } from "uuid";
import { FC, ReactNode, useContext, useEffect, useRef } from "react";
import { AuthContext } from "../../pages/_app";
import { Box, Button, Slider, SliderFilledTrack, SliderThumb, SliderTrack } from "@chakra-ui/react";

function handleSaveHistory(history: any) {
  let json = JSON.stringify(history);
  let blob = new Blob([json], { type: "application/json" });
  let url = URL.createObjectURL(blob);
  console.log(url);
  let tempLink = document.createElement("a");
  tempLink.href = url;
  tempLink.setAttribute("download", "history.json");
  tempLink.click();
}

let throttlePause: boolean;

const throttle = (callback: Function, time: number) => {
  //don't run the function if throttlePause is true
  if (throttlePause) return;
  //set throttlePause to true after the if condition. This allows the function to be run once
  throttlePause = true;

  //setTimeout runs the callback within the specified time
  setTimeout(() => {
    callback();

    //throttlePause is set to false once the function has been called, allowing the throttle function to loop
    throttlePause = false;
  }, time);
};

export const EventFetcher = () => {};

export const Recorder: FC = () => {
  const sessionHistory = useRef<any>([]);
  useEffect(() => {
    const sessionId = uuid();
    document.addEventListener("mousemove", (e) => {
      throttle(() => {
        sessionHistory.current.push({
          sessionId,
          type: "mousemove",
          x: e.clientX,
          y: e.clientY,
        });
      }, 10);
    });
  }, []);

  return (
    <Box position="absolute" top="0" left="0">
      <Button
        onClick={() => {
          handleSaveHistory(sessionHistory.current);
        }}
      >
        Save
      </Button>
    </Box>
  );
};

export const Replayer: FC = () => {
  const history = useRef<any>([]);
  const cursorRef = useRef<any>(null);

  const loadSessionHistory = () => {
    let input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files![0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const text = e.target?.result;
        history.current = JSON.parse(text as string);
      };
      reader.readAsText(file);
    };
    input.click();
  };

  const playSessionHistory = () => {
    let i = 0;
    let interval = setInterval(() => {
      if (i >= history.current.length) {
        clearInterval(interval);
        return;
      }
      let event = history.current[i];
      cursorRef.current.style.left = event.x + "px";
      cursorRef.current.style.top = event.y + "px";
      i++;
    }, 10);
  };

  return (
    <>
      <Button
        zIndex={100}
        position="absolute"
        bottom="0"
        left="0"
        w="32px"
        h="32px"
        bg="black"
        color="white"
        borderRadius={4}
        fontSize="24px"
        onClick={() => {
          loadSessionHistory();
        }}
      >
        +
      </Button>
      <Button
        zIndex={100}
        position="absolute"
        bottom="0"
        left="40px"
        w="32px"
        h="32px"
        bg="black"
        color="white"
        borderRadius={4}
        fontSize="24px"
        onClick={() => {
          playSessionHistory();
        }}
      >
        &gt;
      </Button>

      <Box ref={cursorRef} position="absolute" w="10px" h="10px" bg="green" />
    </>
  );
};

export const EventManager: FC<{ children: ReactNode }> = ({ children }) => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <Box>
        <Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </Box>
      {false ? <Recorder /> : <Replayer />}
      {children}
    </>
  );
};
