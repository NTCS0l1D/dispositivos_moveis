import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Filmes(props) {

  const { dados } = props
  console.log(props)
  
  return (
    <View style={styles.container}>

      <Text style={styles.texto}>Filme</Text>  
      <Text>Nome: {dados.nome}</Text>
      <Text>Ano: {dados.ano}</Text>
      <Text>Diretor: {dados.diretor}</Text>
      <Text>Tipo: {dados.tipo}</Text>

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
    backgroundColor: '#B0E0E6',
    borderWidth: 10,
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  texto: {
    fontSize: 30,
    fontWeight: 600,
    color: 'white'
  }
})