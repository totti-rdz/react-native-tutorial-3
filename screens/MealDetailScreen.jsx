import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { MEALS } from "../data/dummy-data";

const MealDetailScreen = ({ route, navigation }) => {
  const mealId = route.params.id;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;
    navigation.setOptions({ title: mealTitle });
  }, [mealId, navigation]);

  return (
    <View style={styles.container}>
      <Text>MealDetailScreen - {mealId}</Text>
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
});
