import { CSSEffect } from "@donkeyclip/motorcortex";
import { CommonParams } from "./type";
export const fadeOut = (params: CommonParams) =>
  new CSSEffect(
    {
      animatedAttrs: {
        opacity: 0,
      },
    },
    params
  );
