import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  /* width: 250px; */
  width: 100%;
  height: 250px;
  color: "blue";
  background-color: #f5f5f5;
  padding: 20px;
  margin: 22px;
  border-radius: 6px;
  border-top: 5px solid hsl(203, 89%, 53%);
  /* border-top-width: 2px; */
`;

export const CardSubcontainer = styled.div`
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
`;

export const CardCounts = styled.h1`
  font-size: 3em;
  font-weight: bolder;
`;

export const CardCountsSubtext = styled.p`
  /* font-size: 1em; */
  font-weight: normal;
  color: #8c8c8c;
`;

export const CardPercentage = styled.div`
  /* height: fit-content; */
  font-weight: bold;
  display: flex;
  flex-direction: "row";
  align-items: "center";
  /* justify-content: "center"; */
  /* border: 1px solid #000; */
  color: hsl(163, 72%, 41%);
`;
