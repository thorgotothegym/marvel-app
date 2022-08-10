const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
};

export const device = (Object.keys(size) as Array<keyof typeof size>).reduce(
  (acc, key) => {
    acc[key] = (style: String) =>
      `@media (min-width: ${size[key]}) { ${style} }`;
    return acc;
  },
  {} as { [index: string]: Function }
);
