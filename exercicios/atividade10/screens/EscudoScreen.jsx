import { StyleSheet, View, Image } from 'react-native';
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function EscudoScreen() {
  const time = {
    nome: "Flamengo",
    escudo: "https://i.pinimg.com/236x/16/db/d2/16dbd20fd582e025dc54cc3fbd1839c9.jpg",
    fundacao: "15 de novembro de 1895",
    estadio: "Maracanã",
    mascote: "Urubu",
    cores: ["Vermelho", "Preto"]
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title>{time.nome}</Title>
          <Paragraph>Fundado em: {time.fundacao}</Paragraph>
          <Paragraph>Estádio: {time.estadio}</Paragraph>
          <Paragraph>Mascote: {time.mascote}</Paragraph>
          <Paragraph>Cores: {time.cores.join(' e ')}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: time.escudo }} style={styles.image} />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1
  },
  card: {
    borderRadius: 8,
    elevation: 4,
  },
  image: {
    marginTop: 16,
    resizeMode: 'contain',
  }
});
