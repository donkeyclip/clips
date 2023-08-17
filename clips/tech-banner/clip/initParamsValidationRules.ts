export default {
  primaryColor: { type: "color" },
  secondaryColor: { type: "color" },
  backgroundColor: { type: "color" },
  fontColor: { type: "color" },
  text: { type: "string" },
  offer: {
    type: "array",
    items: {
      type: "string",
    },
  },
  cta: { type: "string" },
  link: { type: "string" },
  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        image: { type: "string" },
      },
    },
  },
};
