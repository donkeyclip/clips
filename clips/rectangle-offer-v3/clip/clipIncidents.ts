import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

const initialPath =
  "path('M250.5 147C244.5 184 252.918 162.102 245.5 201.5C267 225.5 245.5 222 245.5 254C270.572 287.15 262.018 275.917 292.918 257.551C324.562 238.743 338.007 200.606 343.824 164.227C349.322 129.847 341.788 95.4827 323.576 65.8382C304.845 35.3473 286.135 8.9479 250.5 6C216.589 3.19476 279.819 64.1863 250.5 81.5C229.5 113.5 283.115 112.037 250.5 147Z')";
const endingPath =
  "path('M125.428 131.35C98.081 160.665 9.1766 165.174 1.75831 204.572C-11.721 276.16 80.4289 259.85 119.428 273.85C147.429 286.85 262.018 275.917 292.918 257.551C324.562 238.743 338.007 200.606 343.824 164.227C349.322 129.847 341.788 95.4827 323.576 65.8382C304.845 35.3473 279.062 3.74679 243.427 0.798893C209.516 -2.00635 188.078 9.25892 158.759 26.5726C126.712 45.4967 158.043 96.3874 125.428 131.35Z')";

export const clipPathImagesCombo = ({
  selector,
  duration,
  startingPosition,
  endingPosition,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  duration: string | number;
  startingPosition: number;
  endingPosition: number;
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
              clipPath: endingPath,
            },
            initalValues: {
              clipPath: initialPath,
            },
          },
          props: {
            duration,
            easing,
          },
          position: startingPosition,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              clipPath: initialPath,
            },
            initalValues: {
              clipPath: endingPath,
            },
          },
          props: {
            duration,
            easing,
          },
          position: endingPosition,
        },
      ],
    },
    {
      selector,
      delay,
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
              transform: {
                translateY: "0",
              },
            },
            initialValues: {
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
}) => {
  return new CSSEffect(
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
};

export const transformTop = ({
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
}) => {
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
      duration,
      delay,
      easing,
    },
  );
};

export const scale = ({
  selector,
  from,
  to,
  duration,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  from: number;
  to: number;
  duration: string | number;
  delay?: string | number;
  easing?: string;
}) => {
  return new CSSEffect(
    {
      animatedAttrs: {
        scale: to,
      },
      initialValues: {
        scale: from,
      },
    },
    {
      selector,
      duration,
      delay,
      easing,
    },
  );
};
