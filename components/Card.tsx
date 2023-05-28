import styled from "styled-components";
import { Title } from "./typography/Title";
import { Text } from "./typography/Text";
import Link from "next/link";
import Image from "next/image";

import { motion, useMotionTemplate, useSpring } from "framer-motion";

interface IProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export const Card: React.FC<IProps> = (props) => {
  const { title, description, image, link } = props;

  const mouseX = useSpring(0, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 100 });

  const onMouseMove = ({ currentTarget, clientX, clientY }: any) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };
  let maskImage = useMotionTemplate`radial-gradient(700px at ${mouseX}px ${mouseY}px, rgba(250,250,250, 0.2), transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  return (
    <Link
      href={link}
      style={{
        textDecoration: "none",
      }}
    >
      <StyledWrapper
        onMouseMove={onMouseMove}
        whileTap={{
          border: "2px solid white",
        }}
      >
        <StyledImageWrapper>
          <Image src={image} alt="" width={200} height={100} />
        </StyledImageWrapper>
        <StyledContentWrapper>
          <Title variant="heading3">{title}</Title>
          <Text variant="body1">{description}</Text>
        </StyledContentWrapper>

        <StyledOverlay style={style}></StyledOverlay>
      </StyledWrapper>
    </Link>
  );
};

const StyledWrapper = styled(motion.div)(
  ({ theme: { shadows, colors } }) => `
    width: 100%:
    box-sizing: border-box;
    padding: 32px;
    box-shadow: ${shadows.standard};
    border: 2px solid rgba(250,250,250, 0.20);
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    background: transparent;
    transition: 0.3s ease all;
    display: flex;
    align-items: center;

    &:hover {
        border: 2px solid rgba(250,250,250, 0.4);
    
        p, h3 {
            color: ${colors.font.body};
        }
    }

    @media only screen and (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
    }
`
);
const StyledImageWrapper = styled.div(
  ({ theme: { colors } }) => `
  display: flex;
  height: 100%;
  border-right: 2px solid ${colors.divider};
  padding-right: 32px;

  @media only screen and (max-width: 768px) {
    padding: 0;
    width: 100%;
    border-right: none;
    border-bottom: 2px solid ${colors.divider};
  }
`
);
const StyledContentWrapper = styled.div(
  ({ theme: { colors } }) => `
  padding-left: 32px;
  box-sizing: border-box;

  p, h3 {
    transition: 0.6s ease all;
    color: ${colors.font.body};
  }

  @media only screen and (max-width: 768px) {
    padding: 16px 0 0 0;
  }
`
);
const StyledOverlay = styled(motion.div)(
  ({ theme: { colors } }) => `
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  background: ${colors.secondaryBg};
  transition-duration: 1s;
`
);
