import { useLayoutEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";
import IconButton from "../components/IconButton";

const MealDetailScreen = ({ route, navigation }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const mealId = route.params.id;
  const { title, imageUrl, duration, complexity, affordability, ingredients, steps } = MEALS.find(
    (meal) => meal.id === mealId
  );

  const handleHeaderButtonPress = () => {
    console.log("HeaderButton pressed");
    setIsFavorite((current) => !current);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: title,
      headerRight: () => (
        <IconButton icon="star" color={isFavorite ? "yellow" : "white"} onPress={handleHeaderButtonPress} />
      ),
    });
  }, [mealId, navigation, isFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>
      <View>
        <MealDetails
          duration={duration}
          complexity={complexity}
          affordability={affordability}
          textStyle={styles.detailsText}
        />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>ingredients</Subtitle>
          <List arr={ingredients} />
          <Subtitle>steps</Subtitle>
          <List arr={steps} />
        </View>
      </View>
    </ScrollView>
  );
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailsText: {
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
