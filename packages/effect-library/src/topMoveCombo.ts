import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const topMoveCombo = (
  selector: string,
  value: string,
  initValue: string,
  endValue: string,
  pauseTime: number,
  duration: number,
  delay: number
) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: value,
            },
            initialValues: {
              top: initValue,
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
              top: endValue,
            },
            initialValues: {
              top: value,
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
    }
  );
