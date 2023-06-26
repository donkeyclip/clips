import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const clipIncidents = (selector: string) => {
  return new Combo(
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
            selector: ".tex-letter",
            duration: 300,
            delay: "@stagger(0, 200,.5,linear,omni)",
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
              top: "0%",
            },
          },
          props: {
            selector: ".tex-letter",
            duration: 300,
            delay: "@stagger(0, 200,.5,linear,omni)",
          },
          position: 2000,
        },
      ],
    },
    {
      selector: selector,
      delay: "@expression(index*3000)",
    }
  );
};
