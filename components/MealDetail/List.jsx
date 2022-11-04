import { StyleSheet, Text, View } from "react-native";

const List = ({ arr }) => {
  if (!arr || arr.length === 0) return <></>;
  return (
    <>
      {arr.map((elem, idx) => (
        <View key={idx} style={styles.listItem}>
          <Text style={styles.text}>{elem}</Text>
        </View>
      ))}
    </>
  );
};
export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    color: "#351401",
    textAlign:"center"
  },
});
