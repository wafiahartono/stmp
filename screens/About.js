import { Image, ImageBackground, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ marginVertical: 16 }}>
        <MissingKittenCarousel />
        <MissingKittenCarousel />
        <MissingKittenCarousel />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  catImage: {
    width: 300,
    height: 400,
  },
  missingSign: {
    marginLeft: 50,
    width: 200,
    height: 400,
    resizeMode: 'center',
  },
})

const MissignKitten = () => {
  const imageId = Math.floor(Math.random() * 16);

  return (
    <ImageBackground style={styles.catImage}
      source={{ uri: 'http://placekitten.com/600/800?image=' + imageId }}>
      <Image style={styles.missingSign}
        source={require('../assets/missing.png')} />
    </ImageBackground>
  )
}

const MissingKittenCarousel = () => {
  return (
    <ScrollView style={{ marginHorizontal: 8 }} horizontal={true} >
      <MissignKitten />
      <MissignKitten />
      <MissignKitten />
    </ScrollView>
  )
}
