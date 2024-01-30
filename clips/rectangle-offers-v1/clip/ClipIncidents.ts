import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const clipIncidents = (selector: string, half = false) => {
  const divider = half ? 2 : 1;
  return new Combo(
    {
      incidents: [
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
            selector: ".play-button",
            duration: 10,
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
            selector: `.pause-button`,
            duration: 10,
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: `50%`,
            },
            initialValues: {
              top: `155%`,
            },
          },
          props: {
            selector: ` .title,${selector} .subtitle`,
            duration: 400,
          },
          position: 39,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: `156%`,
            },
            initialValues: {
              top: `50%`,
            },
          },
          props: {
            selector: `.title,${selector} .subtitle`,
            duration: 400,
          },
          position: 2000 / divider,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: `0%`,
            },
            initialValues: {
              left: `-100%`,
            },
          },
          props: {
            selector: ` .product-title,${selector} .product-description,${selector} .product-price,${selector} .product-button,${selector} .product-image`,
            duration: 400,
          },
          position: 2400 / divider,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              width: `410px`,
            },
            initialValues: {
              width: `0px`,
            },
          },
          props: {
            selector: `.play-bar-progress`,
            duration: 4650 / divider,
          },
          position: 39,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              left: `-100%`,
            },
            initialValues: {
              left: `0%`,
            },
          },
          props: {
            selector: ` .product-title,${selector} .product-description,${selector} .product-price,${selector} .product-button,${selector} .product-image`,
            duration: 400,
          },
          position: 4290 / divider,
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
            selector: `.play-button`,
            duration: 10,
          },
          position: 4290 / divider,
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
            selector: `.pause-button`,
            duration: 10,
          },
          position: 4290 / divider,
        },
      ],
    },
    {
      selector: selector,
    },
  );
};
