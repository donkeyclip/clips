import { CSSEffect, Combo, HTMLClip } from "@donkeyclip/motorcortex";

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

export const pulsingGridDotsCombo = (selector: string, clip: HTMLClip) => {
  const numberOfRepeats = Math.floor(clip.calculatedDuration / 3700) - 1;
  return new Combo(
    {
      incidents: [
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
            duration: 700,
            delay: "@expression(random(500))",
            easing: "easeOutCubic",
          },
          position: 300,
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
            duration: 700,
            delay: "@expression(random(500))",
            easing: "easeOutCubic",
          },
          position: 3000,
        },
      ],
    },
    {
      selector,
      repeats: numberOfRepeats,
    },
  );
};
