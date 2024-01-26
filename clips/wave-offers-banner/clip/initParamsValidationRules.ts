export default {
  title: { label: "Title", type: "string" },
  subtitle: { label: "Subtitle", type: "string" },

  primaryColor: { label: "Primary Color", type: "color" },
  secondaryColor: { label: "Secondary Color", type: "color" },
  fontColor: { label: "Font Color", type: "color" },

  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        name: { type: "string" },
        featured_image: { type: "string" },
      },
    },
  },
};
