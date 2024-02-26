import CustomText from "components/custom-text/CustomText";
import { AddItemIcon } from "shared/icons/icons";
import styled from "styled-components";
import { Column, Row } from "utils/layout";

export const ItemCardContainer = styled(Column)`
  height: 39.7rem;
  min-width: 22.3rem;
  max-width: 45.9rem;

  padding: 1.6rem;

  gap: 0.8rem;
`;

export const ItemCardThumbnailWrapper = styled(Row)`
  width: fit-content;
`;

export const ItemCardThumbnailStyled = styled.img`
  height: 23.2rem;
  min-width: 19.1rem;
  // max-width: 42.7rem;

  border-radius: 2.2rem;

  cursor: pointer;
`;

export const ItemCardContentWrapper = styled(Column)`
  gap: 0.8rem;

  padding: 0.8rem;
`;

export const ItemCardDescription = styled(CustomText)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemCardActionWrapper = styled(Row)`
  padding: 0.8rem;

  justify-content: space-between;
`;

export const AddItemIconStyled = styled(AddItemIcon)`
  width: 3.4rem;
  height: 3.4rem;
`;
