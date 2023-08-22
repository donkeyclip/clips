import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const comboDescription = (selector: string) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "0%",
            },
            initialValues: {
              top: "100%",
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
              top: "100%",
            },
            initialValues: {
              top: "0%",
            },
          },
          props: {
            duration: 400,
            easing: "easeInCubic",
          },
          position: 2500,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *3000)",
    },
  );
