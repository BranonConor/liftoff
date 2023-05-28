import styled from "styled-components";

interface IProps {
  alignment: "left" | "center" | "right";
}

enum ALIGNMENTS {
  "left" = "flex-start",
  "center" = "center",
  "right" = "flex-end",
}

export const Divider: React.FC<IProps> = (props) => {
  const { alignment } = props;

  return (
    <StyledWrapper alignment={alignment}>
      <StyledHr />
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div<IProps>(
  ({ alignment }) => `
  width: 100%;
  display: flex;
  justify-content: ${ALIGNMENTS[alignment]};
  align-items: center;
`
);
const StyledHr = styled.hr(
  ({ theme: { colors } }) => `
  width: 80%;
  border: 2px solid ${colors.divider};
  margin: 32px 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`
);
