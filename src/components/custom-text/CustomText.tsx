import React, { FC } from "react";

import { FontEnum, getFontStyles } from "utils/fonts";
import { StyledTextWrapper } from "./CustomText.styled";

type Props = {
  fontStyle: FontEnum;
  textAlign?: string;
  lineHeight?: string;
  color?: string;
  width?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

const CustomText: FC<Props> = ({
  fontStyle,
  textAlign = "left",
  lineHeight,
  color,
  width,
  className,
  children,
  onClick,
}) => {
  const StyledText = getFontStyles(fontStyle);

  return (
    <StyledTextWrapper
      textAlign={textAlign}
      color={color}
      width={width}
      className={className}
      onClick={onClick}
    >
      <StyledText style={{ lineHeight: lineHeight || "auto" }}>
        {children}
      </StyledText>
    </StyledTextWrapper>
  );
};

export default CustomText;
