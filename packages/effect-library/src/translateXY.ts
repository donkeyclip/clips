import { CSSEffect } from "@donkeyclip/motorcortex";
import { CommonParams } from "./type";
export const translateXY = (
  { selector, duration, delay, easing = "linear" }: CommonParams,
  x: string,
  initialX: string,
  y: string,
  initialY: string
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          translateX: x,
          translateY: y,
        },
      },
      initialValues: {
        transform: {
          translateX: initialX,
          translateY: initialY,
        },
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
