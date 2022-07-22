import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import React from "react";
import RestaurantInfoCard from "../components/restaurant-info-card.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled(View)`
  padding: 16px;
  background-color: #e6e6fa;
`;

const RestaurantListContainer = styled(SearchContainer)`
  flex: 1;
`;

const RestaurantScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantListContainer>
        <RestaurantInfoCard />
      </RestaurantListContainer>
    </SafeArea>
  );
};

export default RestaurantScreen;
