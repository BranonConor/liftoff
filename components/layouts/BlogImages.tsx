import styled from "styled-components";

interface IProps {
  image1: string;
  image2: string;
}

export const BlogImages: React.FC<IProps> = (props) => {
  const { image1, image2 } = props;

  return (
    <StyledWrapper>
      <StyledImage1 src={image1} alt="" width={100} height={100} />
      <StyledImage2 src={image2} alt="" width={100} height={100} />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div(
  ({ theme: { shadows } }) => `
  display: flex;
  width: 100%;
  height: auto;
  margin: 16px 0 64px 0;
  padding: 16px 32px;
  box-sizing: border-box;

  @media only screen and (max-width: 768px) {
    margin: 16px 0 32px 0;
}
  `
);
const StyledImage1 = styled.img(
  ({ theme: { shadows } }) => `
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: ${shadows.standard};
  position: relative;
  top: 32px;

  @media only screen and (max-width: 768px) {
    top: 16px;
}
`
);
const StyledImage2 = styled.img(
  ({ theme: { shadows } }) => `
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    position: absolute;
    left: 0;
    top: -16px;

    @media only screen and (max-width: 768px) {
        top: 0;
    }
  `
);
