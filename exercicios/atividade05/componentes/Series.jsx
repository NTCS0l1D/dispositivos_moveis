import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Ser(props) {

  const { dados } = props
  console.log(props)
  
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Serie</Text>  
      <Text >Nome: {dados.nome}</Text>
      <Text>Ano: {dados.ano}</Text>
      <Text>Diretor: {dados.diretor}</Text>
      <Text>Temporadas: {dados.temporadas}</Text>

      <Image
        source={{ uri: dados.capa }}
        style={{
          height: 250,
          width: 250
        }}

      />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1874CD',
    borderWidth: 10,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 30,
    fontWeight: 800,
    color: 'white'
  }
})