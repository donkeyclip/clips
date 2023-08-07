import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const topLetterMove = (
  selector: string,
  letterSelector: string,
  value: string,
  endValue: string,
  initialValue: string,
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
              top: value,
            },
            initialValues: {
              top: initialValue,
            },
          },
          props: {
            selector: letterSelector,
            duration,
            delay: `@stagger(0,200,.5,linear,omni)`,
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
            selector: letterSelector,
            duration,
            delay: `@stagger(0, 200,.5,linear,omni)`,
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
