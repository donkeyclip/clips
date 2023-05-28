import { CSSEffect } from "@donkeyclip/motorcortex";

function cssEffectGenerator(key: keyof CSSStyleDeclaration) {
  return (params: {
    value: string | number;
    initValue?: string | number;
    selector: ConstructorParameters<typeof CSSEffect>[1]["selector"];
    duration: ConstructorParameters<typeof CSSEffect>[1]["duration"] | any; // TODO: drop any once we get the type fix from mc
    delay?: ConstructorParameters<typeof CSSEffect>[1]["delay"];
    easing?: keyof typeof import("@donkeyclip/motorcortex").utils["easings"];
  }) => {
    const {
      value,
      initValue,
      selector,
      duration,
      delay = 0,
      easing = "linear",
    } = params;

    const props: ConstructorParameters<typeof CSSEffect>[0] = {
      animatedAttrs: {
        [key]: value,
      },
    };

    if (Object.prototype.hasOwnProperty.call(params, "initValue")) {
      props.initialValues = {
        [key]: initValue,
      };
    }
    return new CSSEffect(props, {
      selector,
      duration,
      easing,
      delay,
    });
  };
}

export const top = cssEffectGenerator("top");
export const bottom = cssEffectGenerator("bottom");
export const right = cssEffectGenerator("right");
export const left = cssEffectGenerator("left");
export const scale = cssEffectGenerator("scale");
export const rotate = cssEffectGenerator("rotate");
export const borderWidth = cssEffectGenerator("borderWidth");
export const stroke = cssEffectGenerator("stroke");
export const width = cssEffectGenerator("width");
export const height = cssEffectGenerator("height");
export const opacity = cssEffectGenerator("opacity");
export const backgroundColor = cssEffectGenerator("backgroundColor");
