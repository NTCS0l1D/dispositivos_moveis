// Imports
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

// Componente principal
// Ele deve retornar o que será renderizado na tela (Template feito com JSX)
export default function App() {
  // Lógica do meu componente
  const nome = "Yuri"

  function alerta() {
    alert("Aperta essa porra não seu bosta")
  }

  // Retorno com JSX
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* Comentário dentro do template JSX */}
      {/* Código javascript */}
      <Text style={styles.textogrande}>{7 * 2}</Text>
      <Text style={styles.textogrande}>{nome}</Text>
      <Text style={styles.textogrande}> Vai São Paulo!!!</Text>

      <Button
        onPress={alerta}
        title="Aperte"
        color="#27408B"
      />

      <Image 
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5mdv8Ipwb6emtLap9MJmP4ncayBg3Q3rAKw&s' }}
        style={{
          height: 310,
          width: 330,
          margin: 10
        }}
      />

    </View>
  );
}

//ESTILOS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#AFEEEE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textogrande: {
    fontSize: 35,
    fontWeight: 900,
    fontStyle: 'italic',
    color: 'white'
  },
  botao: {
    color: 'red'
  } 
})