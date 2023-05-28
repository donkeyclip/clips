import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const itemsCombo = (selector: string) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              scale: 1,
            },
            initialValues: {
              scale: 0,
            },
          },
          props: {
            duration: 800,
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
            duration: 800,
            easing: "easeInCubic",
          },
          position: 2500,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *3500)",
    }
  );
