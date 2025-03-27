import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import PrimeiroComponente from './componentes/PrimeiroComponente';
import JavascriptComponente from './componentes/JavascriptComponente';
import Perfil from './componentes/Perfil';
import ListaComponente from './componentes/ListaComponente';
import Pessoa from './componentes/Pessoa';

export default function App() {


  const listaJogadores = [
    {
      nome: "Neymar",
      idade: 33,
      imagem: 'https://i.pinimg.com/236x/65/92/d2/6592d22f05d29398784337cd02a37e26.jpg'
    },
    {
      nome: "Cristiano Ronaldo",
      idade: 40,
      imagem: 'https://i.pinimg.com/originals/c9/3a/cd/c93acdb0a9fc4f6255a079e6db3d760b.jpg'
    },
    {
      nome: "Messi",
      idade: 40,
      imagem: 'https://i.pinimg.com/474x/ab/3b/73/ab3b732b4401d1820418db53ef468cd0.jpg'
    },
    {
      nome: "Salah",
      idade: 37,
      imagem: 'https://i.pinimg.com/736x/30/2f/b8/302fb8f7a071aba5ffface77c7064f01.jpg'
    },
    {
      nome: "Vinicius Junior",
      idade: 27,
      imagem: 'https://i.pinimg.com/736x/4f/39/dc/4f39dcd6e8b2df40e29d33db9ad68e6d.jpg'
    }
  ]



  return (
    <ScrollView>

      <View style={styles.container}>
        <StatusBar style="auto" />

        {
          listaJogadores.map(
            (jogador) => {
              return (
                <Pessoa 
                  dados={jogador}
                />
              )
            }
          )
        }


      </View>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});