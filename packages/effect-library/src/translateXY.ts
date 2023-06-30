import { CSSEffect } from "@donkeyclip/motorcortex";
export const translateXY = (
  selector: string,
  duration: number,
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
    }
  );
