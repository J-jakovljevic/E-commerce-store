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

// CABIN (italic)

const CabinItalic16 = styled.span`
  font-family: "Cabin-Italic";
  font-size: 1.6rem;
  line-height: 1.94rem;
`;

// CABIN (medium)

const CabinMedium20 = styled.span`
  font-family: "Cabin-Medium";
  font-size: 2rem;
  line-height: 2.43rem;
`;

const CabinMedium31 = styled.span`
  font-family: "Cabin-Medium";
  font-size: 3.1rem;
  line-height: 3.8rem;
`;

// CABIN (bold)

const CabinBold61 = styled.span`
  font-family: "Cabin-Bold";
  font-size: 6.1rem;
  line-height: 7.4rem;
`;

const CabinBold31 = styled.span`
  font-family: "Cabin-Bold";
  font-size: 3.1rem;
  line-height: 3.8rem;
`;

export enum FontEnum {
  CabinRegular16 = "CabinRegular16",
  CabinRegular20 = "CabinRegular20",
  CabinItalic16 = "CabinItalic16",
  CabinMedium20 = "CabinMedium20",
  CabinMedium31 = "CabinMedium31",
  CabinBold31 = "CabinBold31",
  CabinBold61 = "CabinBold61",
}

export const getFontStyles = (fontStyle: FontEnum) => {
  const fontMap = {
    [FontEnum.CabinRegular16]: CabinRegular16,
    [FontEnum.CabinRegular20]: CabinRegular20,
    [FontEnum.CabinItalic16]: CabinItalic16,
    [FontEnum.CabinMedium20]: CabinMedium20,
    [FontEnum.CabinMedium31]: CabinMedium31,
    [FontEnum.CabinBold31]: CabinBold31,
    [FontEnum.CabinBold61]: CabinBold61,
  };

  return fontMap[fontStyle] || styled.span``;
};
