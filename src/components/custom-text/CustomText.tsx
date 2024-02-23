import React, { FC } from "react";

import { FontEnum, getFontStyles } from "utils/fonts";
import { StyledTextWrapper } from "./CustomText.styled";

type Props = {
  fontStyle: FontEnum;
  textAlign?: string;
  lineHeight?: string;
  color?: string;
  children: React.ReactNode;
};

const CustomText: FC<Props> = ({
  fontStyle,
  color,
  textAlign = "left",
  lineHeight,
  children,
}) => {
  const StyledText = getFontStyles(fontStyle);

  return (
    <StyledTextWrapper textAlign={textAlign} color={color}>
      <StyledText style={{ lineHeight: lineHeight || "auto" }}>
        {children}
      </StyledText>
    </StyledTextWrapper>
  );
};

export default CustomText;
