import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

export const topToBottomCombo = (
  selector: string,
  enterScenePosition: number,
  exitScenePosition: number,
) => {
  return new Combo(
    {
      incidents: [
        // ENTER SCENE
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: 0,
              scale: 1.1,
            },
            initialValues: {
              top: "-100%",
            },
          },
          props: {
            duration: 1000,
            easing: "easeInOutCubic",
          },
          position: enterScenePosition,
        },
        // EXIT SCENE
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              scale: 0.95,
            },
          },
          props: {
            duration: 1000,
            easing: "easeInOutCubic",
          },
          position: exitScenePosition - 500,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              top: "+100%",
            },
          },
          props: {
            duration: 1000,
            easing: "easeInOutCubic",
          },
          position: exitScenePosition,
        },
      ],
    },
    {
      selector: selector,
    },
  );
};
