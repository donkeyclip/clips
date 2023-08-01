import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const comboImage = (selector: string) =>
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
              top: "-100%",
            },
          },
          props: {
            duration: 400,
            easing: "easeOutCubic",
          },
          position: 0,
        },
        // {
        //     incidentClass: CSSEffect,
        //     attrs: {
        //       animatedAttrs: {
        //           top: "0%"
        //       },
        //       initialValues: {
        //           top: "-100%"
        //       },
        //     },
        //     props: {
        //       duration: 250,
        //       easing: "easeInCubic",
        //     },
        //     position: 200,
        //   },
      ],
    },
    {
      selector,
      delay: "@expression(index *1900)",
    },
  );
