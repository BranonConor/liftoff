import styled, { useTheme } from "styled-components";
import { Title } from "../components/typography/Title";
import { WebLayout } from "../components/layouts/WebLayout";
import Image from "next/image";
import { Card } from "../components/Card";
import { Divider } from "../components/Divider";
import { motion } from "framer-motion";

const IndexPage: React.FC = () => {
  const theme = useTheme();

  return (
    <WebLayout>
      <StyledWrapper>
        {theme.mode === "dark" ? (
          <StyledImage
            src="./logo.svg"
            alt=""
            width={100}
            height={100}
            whileTap={{
              scale: 1.02,
            }}
          />
        ) : (
          <StyledImage src="./logo-light.svg" alt="" width={500} height={100} />
        )}
        <StyledTitle variant="heading1">
          Exploring new horizons. Building better tools.
        </StyledTitle>
        <Divider alignment="left" />
        <Title variant="heading2">LIFTOFF Products</Title>
        <Card
          title="Reimaging collaborative lists"
          description="A productivity tool for streamlining event planning."
          image={
            theme.mode === "dark"
              ? "./list-rocket-logo.svg"
              : "./list-rocket-logo-light.svg"
          }
          link="/list-rocket"
        />
      </StyledWrapper>
    </WebLayout>
  );
};

export default IndexPage;

const StyledWrapper = styled.main`
  width: 100%;
  background: transparent;
  position: relative;
  z-index: 1;
`;
const StyledTitle = styled(Title)(
  ({ theme: { colors } }) => `
  background: ${colors.tertiaryGradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  font-size: 42px; 
`
);
const StyledImage = styled(motion(Image))`
  width: 500px;

  @media only screen and (max-width: 768px) {
    width: 200px;
  }
`;
