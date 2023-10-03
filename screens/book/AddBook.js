import { useState } from "react";
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import books from "../../classes/books";

export default function AddBook({ navigation }) {
  const [judul, setJudul] = useState('')
  const [author, setAuthor] = useState('')
  const [summary, setSummary] = useState('')
  const [urlFotoTemp, setUrlFotoTemp] = useState('')
  const [urlFoto, setUrlFoto] = useState('')

  return (
    <ScrollView
      style={{ padding: 16 }}>

      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#0284c7',
        }}
      >
        Judul
      </Text>

      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginTop: 8,
        }}
        onChangeText={setJudul}
        value={judul} />

      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#0284c7',
          marginTop: 16,
        }}
      >
        Pengarang
      </Text>

      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginTop: 8,
        }}
        onChangeText={setAuthor}
        value={author} />

      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#0284c7',
          marginTop: 16,
        }}
      >
        Ringkasan
      </Text>

      <TextInput
        style={{
          height: 120,
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginTop: 8,
        }}
        multiline={true}
        numberOfLines={4}
        maxLength={500}
        onChangeText={setSummary}
        value={summary} />

      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#0284c7',
          marginTop: 16,
        }}
      >
        URL foto cover buku
      </Text>

      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginTop: 8,
        }}
        onChangeText={setUrlFotoTemp}
        onSubmitEditing={() => {
          setUrlFoto(urlFotoTemp)
        }}
        value={urlFotoTemp} />

      <Image
        style={{
          height: 300,
          width: '100%',
          borderRadius: 8,
          marginTop: 16,
          marginBottom: 16,
        }}
        source={{ uri: urlFoto }}
      />

      <Button
        title="Tambahkan data buku"
        onPress={() => {
          books.push({
            id: books.length + 1,
            judul: judul,
            author: author,
            summary: summary,
            photo: urlFoto,
          })
          Alert.alert('Data buku berhasil ditambahkan')
          navigation.goBack(null)
        }} />
    </ScrollView>
  )
}
