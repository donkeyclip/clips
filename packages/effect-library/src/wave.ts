import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const wave = (selector: string) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "-10px",
            },
            initialValues: {
              top: "0px",
            },
          },
          props: {
            duration: 200,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "0px",
            },
            initialValues: {
              top: "-10px",
            },
          },
          props: {
            duration: 150,
          },
          position: 200,
        },
      ],
    },
    {
      selector,
      delay: "@stagger(0, 500,0,linear,omni)",
      easing: "easeInOutCubic",
    }
  );
