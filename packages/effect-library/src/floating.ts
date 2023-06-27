import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const floating = (
  selector: string,
  value: string,
  initialValue: string
) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: { translateY: value },
            },
            initialValues: {
              transform: { translateY: initialValue },
            },
          },
          props: {
            duration: 800,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: { translateY: initialValue },
            },
            initialValues: {
              transform: { translateY: value },
            },
          },
          props: {
            duration: 800,
          },
          position: 800,
        },
      ],
    },
    {
      selector,
      easing: "easeInOutCubic",
      repeats: 2,
    }
  );
