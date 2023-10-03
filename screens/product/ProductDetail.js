import { Text, View } from "react-native";

export default function ProductDetail({ route }) {
  const { id } = route.params;
  return (
    <View >
      <Text >Ini Detail Product {id}</Text>
    </View>
  );
}
