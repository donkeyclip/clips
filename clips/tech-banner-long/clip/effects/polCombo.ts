import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const polCombo = (selector: string, duration: number | string) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "-23%",
              left: "20%",
              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "100%",
              left: "-30%",

              transform: {
                rotate: "0deg",
              },
            },
          },
          props: {
            selector: "#p1",
            duration,
            //  easing:"easeInOutSine"
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "120%",
              left: "8%",

              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "-20%",
              left: "50%",
              transform: {
                rotate: "0deg",
              },
            },
          },
          props: {
            selector: "#p2",
            duration,
            //  easing:"easeInOutSine"
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "-30%",
              left: "70%",
              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "130%",
              left: "40%",

              transform: {
                rotate: "0deg",
              },
            },
          },
          props: {
            selector: "#p3",
            duration,
            //  easing:"easeInOutSine"
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "150%",
              left: "65%",
              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "-25%",
              left: "105%",

              transform: {
                rotate: "0deg",
              },
            },
          },
          props: {
            selector: "#p4",
            duration,
            //  easing:"easeInOutSine"
          },
          position: 0,
        },
      ],
    },
    {
      selector,
      delay: "@expression(index *3000)",
    },
  );
