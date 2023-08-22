import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const comboImage = (selector: string) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "8%",
            },
            initialValues: {
              top: "-100%",
            },
          },
          props: {
            duration: 400,
            easing: "easeOutCubic",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "-100%",
            },
            initialValues: {
              top: "8%",
            },
          },
          props: {
            duration: 400,
            easing: "easeInCubic",
          },
          position: 2600,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *3000)",
    },
  );
