import { useState, useEffect } from "react";
import IMG_FACEBOOK from "../../images/icon-facebook.svg";
import IMG_INSTAGRAM from "../../images/icon-instagram.svg";
import IMG_TWITTER from "../../images/icon-twitter.svg";
import IMG_YOUTUBE from "../../images/icon-youtube.svg";
import IMG_UP from "../../images/icon-up.svg";
import IMG_DOWN from "../../images/icon-down.svg";
import {
  CardBox,
  CardContent,
  CardUser,
  CardCounts,
  CardCountsSubtext,
  CardPercentage,
  CardBoxSmall,
  CardWapper,
  CardUserSmall,
  CardCountsSmall,
  CardCountsSubtextSmall,
  CardPercentageSmall,
} from "./styles";

interface Props {
  variant?: "primary" | "secondary";
  user?: string;
  count?: string;
  subtext?: string;
  percentage?: number;
  title?: string;
  icon: "youtube" | "instagram" | "facebook" | "twitter";
}

const icon_size = 25;

const Card: React.FC<Props> = ({
  variant,
  user,
  count,
  subtext,
  percentage,
  title,
  icon,
}) => {
  let borderTopColor = "hsl(208, 92%, 53%)";

  return (
    <>
      {variant === "primary" ? (
        <CardBox borderTopColor={borderTopColor}>
          <CardUser>
            <img
              src={verifyIconAndSetBorderColor(icon, borderTopColor)}
              alt="card_image"
              width={icon_size}
              height={icon_size}
            />
            <span>{user}</span>
          </CardUser>
          <CardContent>
            <CardCounts>{count}</CardCounts>
            <CardCountsSubtext>{subtext}</CardCountsSubtext>
          </CardContent>
          <CardPercentage>
            <img src={IMG_UP} alt="card_image" width={15} height={10} />
            {percentage} Today
          </CardPercentage>
        </CardBox>
      ) : (
        variant === "secondary" && (
          <CardBoxSmall borderTopColor={borderTopColor}>
            <CardWapper>
              <CardCountsSubtextSmall>{subtext}</CardCountsSubtextSmall>
              <CardUserSmall>
                <img
                  src={verifyIconAndSetBorderColor(icon, borderTopColor)}
                  alt="card_image"
                  width={icon_size}
                  height={icon_size}
                />
              </CardUserSmall>
            </CardWapper>
            <CardWapper>
              <CardCountsSmall>{count}</CardCountsSmall>
              <CardPercentageSmall>
                <img src={IMG_UP} alt="card_image" width={15} height={10} />
                {percentage}%
              </CardPercentageSmall>
            </CardWapper>
          </CardBoxSmall>
        )
      )}
    </>
  );
};

function verifyIconAndSetBorderColor(name: string, borderTopColor: string) {
  switch (name) {
    case "youtube":
      borderTopColor = "hsl(348, 97%, 39%)";
      return IMG_YOUTUBE;
    case "instagram":
      borderTopColor = "hsl(37, 97%, 70%)";
      return IMG_INSTAGRAM;
    case "twitter":
      borderTopColor = "hsl(203, 89%, 53%)";
      return IMG_TWITTER;
    case "facebook":
      borderTopColor = "hsl(208, 92%, 53%)";
      return IMG_FACEBOOK;
    default:
      break;
  }
}

export default Card;
