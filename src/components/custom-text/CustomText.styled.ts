import styled from "styled-components";

export const StyledTextWrapper = styled.span<{
  textAlign: string;
  color?: string;
}>`
  text-align: ${(props) => props.textAlign};

  ${(props) => props.color && `color: ${props.color}`};
`;
