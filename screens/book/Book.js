import { FlatList, ImageBackground, ScrollView, Text, View } from "react-native";
import books from '../../classes/books';

export default function Book({ navigation }) {
  return (
    <ScrollView>
      <FlatList
        style={{
          marginVertical: 16,
          marginHorizontal: 16,
        }}
        data={books}
        renderItem={({ item: book }) => (
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
                height: 400,
                width: '100%',
              }}
              source={book.photo}>
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
                  {book.judul}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: '600',
                    color: '#f9fafb',
                  }}
                >
                  {book.author}
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    color: '#f9fafb',
                  }}>
                  {book.summary}
                </Text>
              </View>
            </ImageBackground>
          </View>
        )}
      />
    </ScrollView>
  );
}
