import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "../components/MealItem";

import { MEALS } from "../data/dummy-data";

const MealsOverviewScreen = ({ route }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0);

  const renderMealItem = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability } = itemData.item;
    const mealItemProps = {
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
    };
    return <MealItem {...mealItemProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealItem} />
    </View>
  );
};
export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
