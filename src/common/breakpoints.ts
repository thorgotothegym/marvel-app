export enum Size {
  XS = "320px",
  SM = "768px",
  LG = "1200px",
}

export const device = {
  xs: `(min-width: ${Size.XS})`,
  sm: `(min-width: ${Size.SM})`,
  lg: `(min-width: ${Size.LG})`,
};
