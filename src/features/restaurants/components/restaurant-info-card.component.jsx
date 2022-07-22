import React from "react";
import { Card, Paragraph } from "react-native-paper";
import styled from "styled-components/native";

const RestaurantCard = styled(Card)`
  background-color: white;
  padding: 20px;
`;

const RestaurantInfoCard = (restaurant) => {
  const {
    name = "Myrace.me Restaurant",
    icone = null,
    photos = ["https://picsum.photos/700"],
    address = "Association Avenue, Lagos, Nigeria.",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = null,
  } = restaurant;

  return (
    <>
      <RestaurantCard>
        <RestaurantCard.Cover source={{ uri: photos[0] }} />
        <RestaurantCard.Content>
          <Paragraph>{name}</Paragraph>
        </RestaurantCard.Content>
      </RestaurantCard>
    </>
  );
};

export default RestaurantInfoCard;
