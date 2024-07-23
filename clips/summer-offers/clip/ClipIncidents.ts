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

export const width = (
  selector: string,
  initialWidth: string,
  animatedWidth: string,
) => {
  return new CSSEffect(
    {
      animatedAttrs: {
        width: animatedWidth,
      },
      initialValues: {
        width: initialWidth,
      },
    },
    {
      selector,
      duration: 1000,
      easing: "easeOutCubic",
    },
  );
};

export const topTranslate = (selector: string, from: string, to: string) => {
  return new CSSEffect(
    {
      animatedAttrs: {
        transform: {
          translateY: to,
        },
      },
      initialValues: {
        transform: {
          translateY: from,
        },
      },
    },
    {
      selector,
      duration: 700,
      easing: "easeOutCubic",
      delay: "@stagger(0, 200)",
    },
  );
};

export const scaleSmallBigCombo = (
  selector: string,
  enterPosition: number,
  exitPosition: number,
) => {
  return new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              scale: 1.1,
            },
            initialValues: {
              scale: 1,
            },
          },
          props: {
            duration: 2000,
            easing: "easeOutCubic",
          },
          position: enterPosition,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              scale: 1,
            },
            initialValues: {
              scale: 1.1,
            },
          },
          props: {
            duration: 1000,
            easing: "easeOutCubic",
          },
          position: exitPosition,
        },
      ],
    },
    {
      selector,
    },
  );
};
