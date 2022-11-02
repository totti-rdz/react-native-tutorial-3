import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "../components/MealItem";

import { MEALS, CATEGORIES } from "../data/dummy-data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => mealItem.categoryIds.indexOf(catId) >= 0);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  const renderMealItem = (itemData) => {
    const { title, imageUrl, duration, complexity, affordability, id } = itemData.item;
    const mealItemProps = {
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
      mealId: id,
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
