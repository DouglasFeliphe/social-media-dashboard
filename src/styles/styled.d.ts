import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      subtext: string;
      toggle: string;
      card_bg: string;
      card_bg_active: string;
      card_bg_hover: string;
    };
  }
}
