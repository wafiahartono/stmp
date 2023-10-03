import { Button, ScrollView, View } from "react-native";
import Book from "./book/Book";

export default function Home({ navigation }) {
  return (
    <ScrollView>
      <Button title="Go to About Page" onPress={() => navigation.navigate('About')}></Button>
      <Button title="Go to Product Page" onPress={() => navigation.navigate('Product')}></Button>
      <Book />
    </ScrollView>
  );
}
