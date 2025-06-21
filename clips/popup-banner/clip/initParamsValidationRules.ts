export default {
  title: { label: "Title", type: "string" },
  subtitle: { label: "Subtitle", type: "string" },
  logo: { label: "Logo", type: "img" },
  cta: { label: "CTA Text", type: "string" },
  ctaColor: { label: "CTA & Lines Color", type: "color" },
  textColor: { label: "Banner Text Color", type: "color" },
  imageBgColor: { label: "Product Background Color", type: "color" },
  textBgColor: { label: "Banner Background Color", type: "color" },
  productTextColor: { label: "Product's Text Color", type: "color" },
  fontFamily: {
    label: "Font Family",
    type: "enum",
    values: [
      "Eczar",
      "Inter",
      "Poppins",
      "Jura",
      "Source+Code+Pro",
      "Noto+Serif",
    ],
  },
  imagePositioning: {
    label: "Image Positioning",
    type: "enum",
    values: ["cover", "contain"],
  },
  imageClipPath: {
    label: "Enable Image Shape",
    type: "boolean",
    optional: true,
    default: true,
  },
  countdownMilliseconds: {
    label: "Countdown Milliseconds",
    type: "number",
    optional: true,
  },
  products: {
    label: "Products",
    type: "array",
    items: {
      label: "Item",
      type: "object",
      props: {
        featured_image: { label: "Featured Image", type: "img" },
        title: { label: "Product Title", type: "string" },
        old_price: {
          label: "Old Price",
          type: "string",
          optional: true,
          default: "",
        },
        price: {
          label: "New Price",
          type: "string",
          optional: true,
          default: "",
        },
      },
    },
  },
};
