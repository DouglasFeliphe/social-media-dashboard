import ArrowUpwardIcon from "@mui/icons-material/KeyboardArrowUp";
import imgSvg from "../../images/icon-facebook.svg";
import {
  CardContainer,
  CardSubcontainer,
  CardUser,
  CardCounts,
  CardCountsSubtext,
  CardPercentage,
} from "./styles";

interface Props {
  title: string;
  value: string;
  icon: string;
}

function Card() {
  return (
    <CardContainer>
      <CardUser>
        <img src={imgSvg} alt="card_image" width={25} height={25} />
        <span>@nathanf</span>
      </CardUser>
      <CardSubcontainer>
        <CardCounts>10444</CardCounts>
        <CardCountsSubtext>FOLLOWERS</CardCountsSubtext>
      </CardSubcontainer>
      <CardPercentage>
        <ArrowUpwardIcon style={{ borderWidth: 1 }} /> 99 Today
      </CardPercentage>
    </CardContainer>
  );
}

export default Card;
