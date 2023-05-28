export type CommonParams = {
  selector: ConstructorParameters<
    typeof import("@donkeyclip/motorcortex").CSSEffect
  >[1]["selector"];
  duration:
    | ConstructorParameters<
        typeof import("@donkeyclip/motorcortex").CSSEffect
      >[1]["duration"]
    | any; // TODO: drop any once we get the type fix from mc
  delay?: ConstructorParameters<
    typeof import("@donkeyclip/motorcortex").CSSEffect
  >[1]["delay"];
  easing?: keyof typeof import("@donkeyclip/motorcortex").utils["easings"];
};

export type CSSProps = CommonParams & {
  value: string | number;
  initValue?: string | number;
};
