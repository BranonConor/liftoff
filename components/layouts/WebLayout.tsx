"use client";

import { motion } from "framer-motion";
import Head from "next/head";
import styled from "styled-components";

interface IProps {
  children: React.ReactNode;
}
export const WebLayout: React.FC<IProps> = (props) => {
  const { children } = props;
  const siteTitle = "A productivity tool for streamlining events";

  return (
    <StyledLayout>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="A productivity tool for streamlining events"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <StyledContainer
        initial={{ scale: 0, opacity: 0, rotate: "15deg" }}
        animate={{ scale: 1, opacity: 1, rotate: "0deg" }}
        transition={{
          duration: 0.4,
          type: "spring",
        }}
      >
        <StyledPageLayout>{children}</StyledPageLayout>
      </StyledContainer>
    </StyledLayout>
  );
};

const StyledLayout = styled.div`
  width: 100%;
  box-sizing: border-box;
  background: transparent;
`;
const StyledContainer = styled(motion.div)(
  ({ theme: { colors } }) => `
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 64px 32px;
  box-sizing: border-box;
  background: transparent;

  @media only screen and (max-width: 1200px) {
    padding: 32px 16px;
  }

  @media only screen and (max-width: 768px) {
    padding: 16px;
  }
`
);
const StyledPageLayout = styled.main`
  max-width: 1080px;
  width: 100%;
  position: relative;
`;
