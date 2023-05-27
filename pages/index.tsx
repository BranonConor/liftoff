import styled from "styled-components";
import { Title } from "../components/typography/Title";
import { WebLayout } from "../components/layouts/WebLayout";
import Image from "next/image";
import { Card } from "../components/Card";

const IndexPage: React.FC = () => {
  return (
    <WebLayout>
      <StyledWrapper>
        <Image src="./logo.svg" alt="" width={500} height={100} />
        <Title variant="heading1">
          Exploring new horizons. Building cooler tools.
        </Title>

        <Card
          title="ListRocket"
          description="A productivity tool for streamlining event planning."
          image="./list-rocket-logo.svg"
          link="/"
        />
      </StyledWrapper>
    </WebLayout>
  );
};

export default IndexPage;

const StyledWrapper = styled.main`
  width: 100%;
`;
