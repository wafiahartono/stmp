import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import About from "./screens/About";
import Home from './screens/Home';
import Preference from './screens/Preference';
import AddBook from './screens/book/AddBook';
import AddProduct from './screens/product/AddProduct';
import ProductStack from './screens/product/ProductStack';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <StatusBar style="auto" />
    //   <Text style={styles.welcomeText}>Open up App.js to start working on your app!</Text>
    //   <Pet name="catty" sound="Meow, meow!" />
    //   <Pet name="doggie" sound="Woof, woof!" />
    //   <Pet name="duckie" sound="Quack, quack!" />
    //   <Nilai />
    //   <RgbSquare />
    // </View>
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Main" component={TabNavigation} options={{ headerShown: true }} />
        <Drawer.Screen name="Add Product" component={AddProduct} />
        <Drawer.Screen name="Add Book" component={AddBook} />
        <Drawer.Screen name="Preference" component={Preference} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon

          if (route.name == 'Home') {
            icon = focused ? 'home' : 'home-outline'
          } else if (route.name == 'About') {
            icon = focused ? 'information' : 'information-outline'
          } else if (route.name == 'Product') {
            icon = focused ? 'shirt' : 'shirt-outline'
          }

          return <Ionicons name={icon} size={size} color={color} />
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Product" component={ProductStack} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={About} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: 'red',
  },
  soundText: {
    fontWeight: 'bold',
  },
});
