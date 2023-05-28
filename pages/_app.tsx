import { useEffect, useState } from "react";
import { StyleProvider } from "../components/theme/StyleProvider";
import styled from "styled-components";
import { motion } from "framer-motion";
import { AppProps } from "next/app";

const App = ({ Component, pageProps: { ...pageProps } }: AppProps) => {
  const [theme, setTheme] = useState("dark");
  const isDarkTheme = theme === "dark";

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };

  return (
    <StyleProvider themePreference={theme}>
      {theme === "dark" ? (
        <StyledButton
          onClick={toggleTheme}
          initial={{ scale: 0, opacity: 0, rotate: "15deg" }}
          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <StyledIcon
            src="./light-mode-icon.svg"
            alt=""
            whileHover={{ scale: 1.05, rotate: 15 }}
            whileTap={{ scale: 0.95, rotate: -15 }}
          />
        </StyledButton>
      ) : (
        <StyledButton
          onClick={toggleTheme}
          initial={{ scale: 0, opacity: 0, rotate: "15deg" }}
          animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
          transition={{
            duration: 0.4,
            type: "spring",
          }}
        >
          <StyledIcon
            src="./dark-mode-icon.svg"
            alt=""
            whileHover={{ scale: 1.05, rotate: -15 }}
            whileTap={{ scale: 0.95, rotate: 15 }}
          />
        </StyledButton>
      )}

      <Component {...pageProps} />

      {theme === "dark" ? (
        <StyledDarkBackground
          initial={{ scale: 0, width: 1000, height: 1000, opacity: 0.5 }}
          animate={{ scale: 10, width: 1000, height: 1000, opacity: 1 }}
          transition={{
            duration: 1.75,
            type: "spring",
          }}
        />
      ) : (
        <StyledLightBackground
          initial={{ scale: 0, width: 1000, height: 1000, opacity: 0.5 }}
          animate={{ scale: 10, width: 1000, height: 1000, opacity: 1 }}
          transition={{
            duration: 1.75,
            type: "spring",
          }}
        />
      )}
    </StyleProvider>
  );
};

export default App;

const StyledButton = styled(motion.button)(
  ({ theme: { shadows } }) => `
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding: 0;
  z-index: 10;
  background: transparent;
  cursor: pointer;
  border-radius: 100%;
  box-shadow: ${shadows.standard};

  @media only screen and (max-width: 768px) {
    bottom: 16px;
    top: initial;
  }
`
);
const StyledIcon = styled(motion.img)`
  width: 30px;
  height: 30px;
  padding: 16px;
`;
const StyledLightBackground = styled(motion.div)`
  background: white;
  border-radius: 100%;
  position: fixed;
  top: -444px;
  right: -444px;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    top: initial;
    bottom: -444px;
  }
`;
const StyledDarkBackground = styled(motion.div)`
  background: black;
  border-radius: 100%;
  position: fixed;
  top: -444px;
  right: -444px;
  z-index: -1;

  @media only screen and (max-width: 768px) {
    top: initial;
    bottom: -444px;
  }
`;
