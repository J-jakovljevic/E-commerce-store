import styled from "styled-components";

// CABIN (regular)

const CabinRegular16 = styled.span`
  font-family: "Cabin-Regular";
  font-size: 1.6rem;
  line-height: 1.94rem;
`;

const CabinRegular20 = styled.span`
  font-family: "Cabin-Regular";
  font-size: 2rem;
  line-height: 2.4rem;
`;

// CABIN (medium)

const CabinMedium20 = styled.span`
  font-family: "Cabin-Medium";
  font-size: 2rem;
  line-height: 2.43rem;
`;

export enum FontEnum {
  CabinRegular16 = "CabinRegular16",
  CabinRegular20 = "CabinRegular20",
  CabinMedium20 = "CabinMedium20",
}

export const getFontStyles = (fontStyle: FontEnum) => {
  const fontMap = {
    [FontEnum.CabinRegular16]: CabinRegular16,
    [FontEnum.CabinRegular20]: CabinRegular20,
    [FontEnum.CabinMedium20]: CabinMedium20,
  };

  return fontMap[fontStyle] || styled.span``;
};
