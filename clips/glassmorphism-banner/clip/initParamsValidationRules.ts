export default {
  title: { label: "Title", type: "string" },
  subtitle: { label: "Subtitle", type: "string" },
  ctaText: { label: "CTA Text", type: "string" },

  primaryColor: { label: "Primary Color", type: "color" },
  secondaryColor: { label: "Secondary Color", type: "color" },
  fontColor: { label: "Font Color", type: "color" },
  backgroundColor: { label: "Background Color", type: "color" },

  products: {
    label: "Products",
    type: "array",
    items: {
      type: "object",
      props: {
        featured_image: { type: "string" },
        name: { type: "string" },
      },
    },
  },
};
