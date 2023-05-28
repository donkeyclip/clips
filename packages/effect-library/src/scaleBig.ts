//This incident is export as function so you can use it more than one times

import { CSSEffect } from "@donkeyclip/motorcortex";
import { CommonParams } from "./type";
export const scaleBig = ({
  selector,
  duration,
  delay,
  easing = "linear",
}: CommonParams) =>
  new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          scale: 1.8,
        },
      },
      initialValues: {
        opacity: 0,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
