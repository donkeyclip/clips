import { CSSEffect, Combo } from "@donkeyclip/motorcortex";

const initialPath = "inset(0% 0% 95% 100%)";
const endingPath = "inset(0% 0% 95% 0%)";

const initialPath2 = "inset(0% 0% 95% 0%)";
const endingPath2 = "inset(0% 0% -1% 0%)";

export const clipPathExpandFromLineCombo = ({
  selector,
  duration,
  startingPosition,
  endingPosition,
  delay = 0,
  easing = "linear",
}: {
  selector: string;
  duration: number;
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
              clipPath: endingPath2,
            },
            initalValues: {
              clipPath: initialPath2,
            },
          },
          props: {
            duration,
            easing,
          },
          position: startingPosition + duration,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              clipPath: initialPath2,
            },
            initalValues: {
              clipPath: endingPath2,
            },
          },
          props: {
            duration,
            easing,
          },
          position: endingPosition,
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
          position: endingPosition + duration,
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

// export const showAndHideTextCombo = ({
//   selector,
//   displayTextDuration,
//   enterScenePosition = 0,
//   exitScenePosition = 0,
//   enterAnimationDuration = 1300,
//   exitAnimationDuration = 1300,
//   easing = "easeInOutQuad",
// }: {
//   selector: string;
//   displayTextDuration: number;
//   enterScenePosition?: number;
//   exitScenePosition?: number;
//   enterAnimationDuration?: number;
//   exitAnimationDuration?: number;
//   from?: string;
//   to?: string;
//   duration?: string | number;
//   delay?: string | number;
//   easing?: string;
// }) => {
//   return new Combo(
//     {
//       incidents: [
//         {
//           incidentClass: CSSEffect,
//           attrs: {
//             animatedAttrs: {
//               transform: {
//                 translateY: "0",
//               },
//             },
//             initialValues: {
//               transform: {
//                 translateY: "100%",
//               },
//             },
//           },
//           props: {
//             duration: enterAnimationDuration,
//             easing,
//           },
//           position: enterScenePosition ? enterScenePosition : 0,
//         },
//         {
//           incidentClass: CSSEffect,
//           attrs: {
//             animatedAttrs: {
//               transform: {
//                 translateY: "100%",
//               },
//             },
//           },
//           props: {
//             duration: exitAnimationDuration,
//             easing,
//           },
//           position: exitScenePosition
//             ? exitScenePosition
//             : displayTextDuration + enterAnimationDuration,
//         },
//       ],
//     },
//     {
//       selector,
//     },
//   );
// };

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

export const color = ({
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
        color: to,
      },
      initialValues: {
        color: from,
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

// export const transformTop = ({
//   selector,
//   from,
//   to,
//   duration,
//   delay = 0,
//   easing = "linear",
// }: {
//   selector: string;
//   from: string;
//   to: string;
//   duration: string | number;
//   delay?: string | number;
//   easing?: string;
// }) => {
//   return new CSSEffect(
//     {
//       animatedAttrs: {
//         transform: {
//           translateY: to,
//         },
//       },
//       initialValues: {
//         transform: {
//           translateY: from,
//         },
//       },
//     },
//     {
//       selector,
//       duration,
//       delay,
//       easing,
//     },
//   );
// };

// export const scale = ({
//   selector,
//   from,
//   to,
//   duration,
//   delay = 0,
//   easing = "linear",
// }: {
//   selector: string;
//   from: number;
//   to: number;
//   duration: string | number;
//   delay?: string | number;
//   easing?: string;
// }) => {
//   return new CSSEffect(
//     {
//       animatedAttrs: {
//         scale: to,
//       },
//       initialValues: {
//         scale: from,
//       },
//     },
//     {
//       selector,
//       duration,
//       delay,
//       easing,
//     },
//   );
// };

export const mask = ({
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
        maskImage: to,
      },
      initialValues: {
        maskImage: from,
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

export const opacity = ({
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
        opacity: to,
      },
      initialValues: {
        opacity: from,
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
