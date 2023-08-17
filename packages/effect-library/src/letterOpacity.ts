import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const letterOpacity = (
  selector: string,
  letterSelector: string,
  value: number,
  initialValue: number,
  delay: number,
  pauseTime: number,
  duration: number,
) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: value,
            },
            initialValues: {
              oapcity: initialValue,
            },
          },
          props: {
            selector: letterSelector,
            duration,
            delay: `@expression(random(${duration - 100}))`,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: initialValue,
            },
            initialValues: {
              opacity: value,
            },
          },
          props: {
            selector: letterSelector,
            duration,
            delay: `@expression(random(${duration - 100}))`,
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
