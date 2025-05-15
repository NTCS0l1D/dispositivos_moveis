import React, { useState } from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Card, Text, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const animais = [
  {
    numero: 1,
    nome: 'Avestruz',
    imagem: 'https://i.pinimg.com/736x/ef/3a/bb/ef3abbbc39b3cacee1ba922f95f1b0cd.jpg',
  },
  {
    numero: 2,
    nome: 'Águia',
    imagem: 'https://i.pinimg.com/736x/88/04/3b/88043b814c6d4fef1f4aee14356c00b1.jpg',
  },
  {
    numero: 3,
    nome: 'Burro',
    imagem: 'https://i.pinimg.com/736x/bc/f3/ee/bcf3eee6436f220cb4d10962e394c741.jpg',
  },
  {
    numero: 4,
    nome: 'Borboleta',
    imagem: 'https://i.pinimg.com/736x/dc/91/91/dc91911cb150d57f2f43da7466d1ab4f.jpg',
  },
  {
    numero: 5,
    nome: 'Cachorro',
    imagem: 'https://i.pinimg.com/736x/82/fb/de/82fbde9c403d43ebc83d79414b9239c3.jpg',
  },
  {
    numero: 6,
    nome: 'Cabra',
    imagem: 'https://i.pinimg.com/736x/10/20/bb/1020bbf758fa245fff4c4b1276e83b8a.jpg',
  },
  {
    numero: 7,
    nome: 'Carneiro',
    imagem: 'https://i.pinimg.com/736x/ce/c4/e6/cec4e6c3f16a63f9a713267ffcf9e114.jpg',
  },
  {
    numero: 8,
    nome: 'Camelo',
    imagem: 'https://i.pinimg.com/736x/85/0b/11/850b11e4c316abfe126ff1866c2aaeb0.jpg',
  },
  {
    numero: 9,
    nome: 'Cobra',
    imagem: 'https://i.pinimg.com/736x/3d/d8/a5/3dd8a5e99264f67efae4074431262878.jpg',
  },
  {
    numero: 10,
    nome: 'Coelho',
    imagem: 'https://i.pinimg.com/736x/eb/17/8b/eb178b465704a327d3e954eef4c7e338.jpg',
  },
];

export default function JogoDoBichoScreen() {
  const [animalGerado, setAnimalGerado] = useState(null);

  const gerarAnimal = () => {
    const numeroSorteado = Math.floor(Math.random() * 10) + 1;
    const animal = animais.find(a => a.numero === numeroSorteado);
    setAnimalGerado(animal);
  };

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1050&q=80',
      }}
      style={styles.background}
      imageStyle={{ opacity: 0.07 }}
    >
      <View style={styles.container}>
        <Title style={styles.title}>
          <MaterialCommunityIcons name="paw" size={28} color="#8E44AD" /> Jogo do Bicho
        </Title>

        <Button
          mode="contained"
          onPress={gerarAnimal}
          style={styles.button}
          labelStyle={styles.buttonText}
          icon="dice-6-outline"
        >
          Sortear Animal
        </Button>

        {animalGerado && (
          <Card style={styles.card}>
            <Card.Content style={styles.cardContent}>
              <Image
                source={{ uri: animalGerado.imagem }}
                style={styles.image}
              />
              <Text style={styles.animalNome}>
                Nº {animalGerado.numero}: {animalGerado.nome}
              </Text>
            </Card.Content>
          </Card>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: '900',
    marginBottom: 30,
    color: '#8E44AD',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8E44AD',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 24,
    elevation: 5,
    marginBottom: 24,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#ffffff',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    elevation: 5,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  cardContent: {
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
    borderRadius: 12,
    marginBottom: 16,
  },
  animalNome: {
    fontSize: 20,
    fontWeight: '700',
    color: '#8E44AD',
    textAlign: 'center',
  },
});
