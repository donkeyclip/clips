import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const comboOffer = (selector: string) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: "@expression((index+1)*0.1)",
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            duration: 200,
            easing: "easeOutCubic",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              color: "transparent",
            },
            initialValues: {
              color: "white",
            },
          },
          props: {
            duration: 250,
            easing: "easeInCubic",
          },
          position: 200,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *450)",
    },
  );
