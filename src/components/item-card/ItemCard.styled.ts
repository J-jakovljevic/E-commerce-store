import CustomText from "components/custom-text/CustomText";
import { AddItemIcon } from "shared/icons/icons";
import styled from "styled-components";
import colors from "utils/colors";
import { Column, Row } from "utils/layout";

export const ItemCardContainer = styled(Column)`
  height: 39.7rem;

  min-width: 22.3rem;

  padding: 1.6rem;

  gap: 0.8rem;

  box-sizing: border-box;

  @media (max-width: 495px) {
    min-width: 34.5rem;

    padding: 1.6rem 1rem;
  }

  @media (max-width: 422px) {
    min-width: 100%;
  }
`;

export const ItemCardThumbnailWrapper = styled(Row)`
  width: fit-content;

  @media (max-width: 422px) {
    width: 100%;
  }
`;

export const ItemCardThumbnailStyled = styled.img`
  height: 23.2rem;
  min-width: 19.1rem;
  width: 100%;

  border-radius: 2.2rem;

  cursor: pointer;
`;

export const ItemCardContentWrapper = styled(Column)`
  gap: 0.8rem;

  padding: 0.8rem;
`;

export const ItemCardDescriptionWrapper = styled(Row)`
  gap: 0.2rem;
`;

export const ItemCardDescription = styled(CustomText)`
  width: 22rem;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;

  @media (max-width: 367px) {
    width: 15rem;
  }
`;

export const ReadMoreLink = styled(CustomText)`
  cursor: pointer;

  :hover {
    color: ${colors.lightBlue};
  }
`;

export const ItemCardActionWrapper = styled(Row)`
  padding: 0.8rem;

  justify-content: space-between;
`;

export const AddItemIconStyled = styled(AddItemIcon)`
  width: 3.4rem;
  height: 3.4rem;
`;
