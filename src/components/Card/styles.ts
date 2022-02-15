import styled from "styled-components";

export const CardBox = styled.div<{ borderTopColor: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 250px;
  color: "blue";
  background-color: ${(props) => props.theme.colors.card_bg};
  padding: 20px;
  margin: 22px 44px;
  border-radius: 6px;
  /* border-top: 5px solid hsl(203, 89%, 53%); */
  border-top: 5px solid ${(props) => props.borderTopColor};
  cursor: pointer;

  &:active {
    background-color: ${(props) => props.theme.colors.card_bg_active};
  }

  &:hover {
    background-color: ${(props) => props.theme.colors.card_bg_hover};
  }

  @media (min-width: 1440px) {
    width: 15%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardUser = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: "center";
  align-items: "center";
  font-size: 1.2em;
  font-weight: 700;
  color: ${(props) => props.theme.colors.subtext};
`;

export const CardCounts = styled.h1`
  font-size: 3em;
  font-weight: bolder;
  color: ${(props) => props.theme.colors.text};
`;

export const CardCountsSubtext = styled.p`
  font-weight: normal;
  color: ${(props) => props.theme.colors.subtext};
`;

export const CardPercentage = styled.div`
  font-weight: bold;
  display: flex;
  flex-direction: "row";
  align-items: center;
  justify-content: center;

  color: hsl(163, 72%, 41%);
`;

export const CardBoxSmall = styled(CardBox)`
  height: 100%;
  border-top: none;
`;

export const CardWapper = styled.div`
  padding: 11px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardUserSmall = styled(CardUser)`
  height: 100%;
  margin-left: auto;
`;

export const CardCountsSmall = styled(CardCounts)`
  font-size: 1.5rem;
`;

export const CardCountsSubtextSmall = styled(CardCountsSubtext)`
  font-weight: 700;
`;

export const CardPercentageSmall = styled(CardPercentage)`
  margin-left: auto;
  align-items: center;
`;
