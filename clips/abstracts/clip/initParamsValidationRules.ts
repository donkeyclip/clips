export default {
  title: { label: "Title", type: "string" },
  text: { label: "Text", type: "string" },
  secondaryText: { label: "Secondary Text", type: "string" },
  thirdText: { label: "Third Text", type: "string" },
  fourthText: { label: "Fourth Text", type: "string" },
  primaryColor: { label: "Primary Color", type: "color" },
  secondaryColor: { label: "Secondary Color", type: "color" },
  backgroundColor: { label: "Background Color", type: "color" },
  fontColor: { label: "Font Color", type: "color" },
  ctaText: { label: "CTA Text", type: "string" },
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
