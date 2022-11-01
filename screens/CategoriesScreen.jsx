// using FlatList for practice here
import { FlatList, StyleSheet, Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/dummy-data";

const renderCategoryItem = (itemData) => <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />;

const CategoriesScreen = () => {
  return <FlatList data={CATEGORIES} keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />;
};
export default CategoriesScreen;

const styles = StyleSheet.create({});
