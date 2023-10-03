import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import resep from '../../classes/resep';

export default function Product({ navigation }) {
  return (
    <ScrollView>
      {/* <Button title="Go to About Page" onPress={() => navigation.navigate('About')}></Button> */}
      {/* <Button title="Product 1" onPress={() => navigation.navigate('ProductDetail', { id: 1 })}></Button> */}
      {/* <Button title="Product 2" onPress={() => navigation.navigate('ProductDetail', { id: 2 })}></Button> */}
      <FlatList
        style={{
          marginVertical: 16,
          marginHorizontal: 16,
        }}
        data={resep}
        renderItem={({ item }) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: '#d1d5db',
              borderRadius: 8,
              backgroundColor: '#f9fafb',
              marginBottom: 8,
            }}>
            <ImageBackground
              style={{
                borderRadius: 8,
                overflow: 'hidden',
                height: 240,
                width: '100%',
              }}
              source={item.photo}>
              <View
                style={{
                  backgroundColor: 'rgba(3, 7, 18, .4)',
                  padding: 8,
                  marginTop: 'auto',
                }}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '900',
                    color: '#f9fafb',
                  }}
                >
                  {item.nama}
                </Text>
                <Text
                  style={{
                    fontSize: 10,
                    color: '#f9fafb',
                  }}>
                  {item.desk}
                </Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </ScrollView>
  );
}
