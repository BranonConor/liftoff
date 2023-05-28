import { createGlobalStyle, ThemeProvider } from "styled-components";
import { colors } from "./colors";
import {
  size,
  font,
  weight,
  lineHeight,
  letterSpacing,
  textTransform,
} from "./typography";
import { darkTheme, GlobalStyle, lightTheme } from "./config";

interface IProps {
  themePreference: string;
  children: React.ReactNode;
}

export const StyleProvider: React.FC<IProps> = (props) => {
  const { children, themePreference } = props;

  return (
    <ThemeProvider theme={themePreference === "dark" ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};
