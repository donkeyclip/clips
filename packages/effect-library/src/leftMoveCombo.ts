import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const leftMoveCombo = (
  selector: string,
  value: string,
  initValue: string,
  endValue: string,
  pauseTime: number,
  duration: number,
  delay: number,
) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: value,
            },
            initialValues: {
              left: initValue,
            },
          },
          props: {
            duration,
            easing: "easeOutCubic",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: endValue,
            },
            initialValues: {
              left: value,
            },
          },
          props: {
            duration,
            easing: "easeInCubic",
          },
          position: duration + pauseTime,
        },
      ],
    },
    {
      selector,
      delay: `@expression(index *${delay})`,
    },
  );
