export enum Devices {
  MOBILES = "320px",
  MOBILESM = "375px",
  MOBILESL = "425px",
  TABLET = "768px",
  LAPTOP = "1024px",
  LAPTOPL = "1440px",
  DESKTOP = "2560px",
}

export const device = {
  mobileS: `(min-width: ${Devices.MOBILES})`,
  mobileM: `(min-width: ${Devices.MOBILESM})`,
  mobileL: `(min-width: ${Devices.MOBILESL})`,
  tablet: `(min-width: ${Devices.TABLET})`,
  laptop: `(min-width: ${Devices.LAPTOP})`,
  laptopL: `(min-width: ${Devices.LAPTOPL})`,
  desktop: `(min-width: ${Devices.DESKTOP})`,
};
