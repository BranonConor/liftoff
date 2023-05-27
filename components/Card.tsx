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
    <StyledWrapper onMouseMove={onMouseMove}>
      <Image src={image} alt="" width={200} height={100} />
      <Title variant="heading2">{title}</Title>
      <Text variant="body1">{description}</Text>
      <Link href={link} />

      <StyledOverlay style={style}></StyledOverlay>
    </StyledWrapper>
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

    p, h2 {
        transition: 1s ease all;
    }

    &:hover {
        border: 2px solid rgba(250,250,250, 0.4);
    
        p, h2 {
            color: white;
        }
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
  background: ${colors.bgLight};
  transition-duration: 1s;
`
);
