import { useState } from "react";
import { Alert, Button, Image, ScrollView, Text, TextInput, View } from "react-native";
import resep from "../../classes/resep";

export default function AddProduct({ navigation }) {
  const [nama, setNama] = useState('')
  const [deskripsi, setDeskripsi] = useState('')
  const [urlFotoTemp, setUrlFotoTemp] = useState('')
  const [urlFoto, setUrlFoto] = useState('')

  return (
    <ScrollView
      style={{
        padding: 16,
      }}>
      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#0284c7',
        }}
      >Nama makanan</Text>
      <TextInput
        style={{
          height: 40,
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginTop: 8,
        }}
        onChangeText={setNama}
        value={nama} />

      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#0284c7',
          marginTop: 16,
        }}
      >Deskripsi</Text>
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
        maxLength={100}
        onChangeText={setDeskripsi}
        value={deskripsi} />

      <Text
        style={{
          fontWeight: '600',
          fontSize: 12,
          color: '#0284c7',
          marginTop: 16,
        }}
      >URL foto makanan</Text>
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
        title="Add product"
        onPress={() => {
          resep.push({
            id: resep.length + 1,
            nama: nama,
            desk: deskripsi,
            photo: urlFoto,
          })
          Alert.alert('Resep makanan berhasil ditambahkan')
          navigation.goBack(null)
        }} />
    </ScrollView>
  )
}
