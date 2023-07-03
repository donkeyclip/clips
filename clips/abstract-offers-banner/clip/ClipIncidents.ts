import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const clipIncidents = (selector: string) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: "0%",
            },
            initialValues: {
              left: "-100%",
            },
          },
          props: {
            selector: ".pr-bg",
            duration: 500,
            easing: "easeOutCubic",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            selector: ".offer-circle",
            duration: 800,
            easing: "easeOutCubic",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                scale: 1,
                rotate: "135deg",
              },
              left: "0px",
            },
            initialValues: {
              transform: {
                scale: 0,
                rotate: "0deg",
              },
              left: "-40px",
            },
          },
          props: {
            selector: ".cross",
            duration: 600,
            delay: "@stagger(0,300)",
            easing: "easeOutCubic",
          },
          position: 500,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 1,
            },
            initialValues: {
              opacity: 0,
            },
          },
          props: {
            selector: ".grid-dot",
            duration: 700,
            delay: "@expression(random(500))",
            easing: "easeOutCubic",
          },
          position: 300,
        },

        /**/
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: "-100%",
            },
            initialValues: {
              left: "0%",
            },
          },
          props: {
            selector: ".pr-bg",
            duration: 500,
            easing: "easeInCubic",
          },
          position: 2300,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
            initialValues: {
              opacity: 1,
            },
          },
          props: {
            selector: ".offer-circle",
            duration: 800,
            easing: "easeInCubic",
          },
          position: 2000,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                scale: 0,
                rotate: "0deg",
              },
              left: "-40px",
            },
            initialValues: {
              transform: {
                scale: 1,
                rotate: "135deg",
              },
              left: "0px",
            },
          },
          props: {
            selector: ".cross",
            duration: 600,
            delay: "@stagger(0,300)",
            easing: "easeOutCubic",
          },
          position: 1900,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              opacity: 0,
            },
            initialValues: {
              opacity: 1,
            },
          },
          props: {
            selector: ".grid-dot",
            duration: 700,
            delay: "@expression(random(500))",
            easing: "easeOutCubic",
          },
          position: 1700,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *3000)",
    }
  );
