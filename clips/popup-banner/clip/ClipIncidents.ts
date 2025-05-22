import { CSSEffect } from "@donkeyclip/motorcortex";

export const gap = (
  value: string,
  selector: string,
  duration: number,
  delay = 0,
  easing = "linear",
  initialValues?: { gap: string } | undefined,
) =>
  new CSSEffect(
    {
      animatedAttrs: {
        gap: value,
      },
      initialValues,
    },
    {
      selector,
      duration,
      delay,
      easing,
    },
  );
