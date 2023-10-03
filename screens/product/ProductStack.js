import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Product from "./Product";
import ProductDetail from "./ProductDetail";

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Product" component={Product} options={{ headerShown: false }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
