export default {
  title: { label: "Title", type: "string" },
  subtitle: { label: "Subtitle", type: "string" },
  text: { label: "Text", type: "string" },
  secondaryText: { label: "Secondary Text", type: "string" },

  fontColor: { label: "Font Color", type: "color" },
  primaryColor: { label: "Primary Color", type: "color" },
  secondaryColor: { label: "Secondary Color", type: "color" },
  backgroundColor: { label: "Background Color", type: "color" },

  products: {
    label: "Products",
    type: "array",
    items: {
      label: "Item",
      type: "object",
      props: {
        featured_image: { type: "string" },
      },
    },
  },
};
