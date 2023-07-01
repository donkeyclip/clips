import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const polCombo = (selector, duration) =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "-15%",
              left: "20%",
              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "70%",
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
              top: "110%",
              left: "8%",

              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "-10%",
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
              top: "-10%",
              left: "70%",
              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "110%",
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
              top: "105%",
              left: "65%",
              transform: {
                rotate: "360deg",
              },
            },
            initialValues: {
              top: "-5%",
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
    }
  );
