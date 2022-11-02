import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.id;
  const { title, imageUrl, duration, complexity, affordability, ingredients, steps } = MEALS.find(
    (meal) => meal.id === mealId
  );

  useLayoutEffect(() => {
    navigation.setOptions({ title: title });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />

      <Text>{title}</Text>
      <View>
        <MealDetails duration={duration} complexity={complexity} affordability={affordability} />
      </View>
      <Text>Ingredients</Text>
      {ingredients.map((ingredient, idx) => (
        <View key={idx}>
          <Text>{ingredient}</Text>
        </View>
      ))}
      <Text>Steps</Text>
      {steps.map((step, idx) => (
        <View key={idx}>
          <Text>{step}</Text>
        </View>
      ))}
    </View>
  );
};
export default MealDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 200,
  },
});
