import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
//This incident is export as function so you can use it more than one times
export const clipPath = ({
  selector,
  from,
  to,
  duration,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  from: string;
  to: string;
  duration: string | number;
  delay?: string | number;
  easing?: string;
}) =>
  new CSSEffect(
    {
      animatedAttrs: {
        clipPath: to,
      },
      initialValues: {
        clipPath: from,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    },
  );

export const expandRetractImageCombo = ({
  selector,
  displayProductDuration,
  enterScenePosition = 0,
  exitScenePosition = 0,
  enterAnimationDuration = 1300,
  exitAnimationDuration = 1300,
  easing = "easeInOutQuad",
}: {
  selector: string;
  displayProductDuration: number;
  enterScenePosition?: number;
  exitScenePosition?: number;
  enterAnimationDuration?: number;
  exitAnimationDuration?: number;
  from?: string;
  to?: string;
  duration?: string | number;
  delay?: string | number;
  easing?: string;
}) => {
  return new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              clipPath: "inset(0 0% 0% 0%)",
            },
            initialValues: {
              clipPath: "inset(0 100% 0% 0%)",
            },
          },
          props: {
            duration: enterAnimationDuration,
            easing,
          },
          position: enterScenePosition ? enterScenePosition : 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              clipPath: "inset(0 100% 0% 0%)",
            },
          },
          props: {
            duration: exitAnimationDuration,
            easing,
          },
          position: exitScenePosition
            ? exitScenePosition
            : displayProductDuration + enterAnimationDuration,
        },
      ],
    },
    {
      selector,
      easing,
    },
  );
};

export const showAndHideTextCombo = ({
  selector,
  displayTextDuration,
  enterScenePosition = 0,
  exitScenePosition = 0,
  enterAnimationDuration = 1300,
  exitAnimationDuration = 1300,
  easing = "easeInOutQuad",
}: {
  selector: string;
  displayTextDuration: number;
  enterScenePosition?: number;
  exitScenePosition?: number;
  enterAnimationDuration?: number;
  exitAnimationDuration?: number;
  from?: string;
  to?: string;
  duration?: string | number;
  delay?: string | number;
  easing?: string;
}) => {
  return new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              // top: "0",
              transform: {
                translateY: "0",
              },
            },
            initialValues: {
              // top: "100%",
              transform: {
                translateY: "100%",
              },
            },
          },
          props: {
            duration: enterAnimationDuration,
            delay: "@stagger(0, 300)",
            easing,
          },
          position: enterScenePosition ? enterScenePosition : 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              // top: "100%",
              transform: {
                translateY: "100%",
              },
            },
          },
          props: {
            duration: exitAnimationDuration,
            easing,
          },
          position: exitScenePosition
            ? exitScenePosition
            : displayTextDuration + enterAnimationDuration,
        },
      ],
    },
    {
      selector,
    },
  );
};
