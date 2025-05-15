import React, { useState } from 'react';
import { View, StyleSheet, FlatList, ImageBackground } from 'react-native';
import { Button, Card, Text, Title, Divider } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const numeros = [];
    while (numeros.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!numeros.includes(numero)) {
        numeros.push(numero);
      }
    }
    const novoJogo = numeros.sort((a, b) => a - b);
    setJogoGerado(novoJogo);
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  const renderItem = ({ item, index }) => (
    <Card style={styles.cardItem}>
      <Card.Content style={styles.cardContent}>
        {item.map((num, i) => (
          <View key={i} style={styles.ball}>
            <Text style={styles.ballText}>{num}</Text>
          </View>
        ))}
      </Card.Content>
    </Card>
  );

  return (
    <ImageBackground
      source={{
        uri: 'https://i.pinimg.com/originals/f8/69/7e/f8697e20a46ae87f03720d3cd1fc2ed4.jpg',
      }}
      style={styles.background}
      imageStyle={{ opacity: 0.08 }}
    >
      <View style={styles.container}>
        <Title style={styles.title}>
          <MaterialCommunityIcons name="star-four-points" size={28} color="#fff" /> Mega-Sena
        </Title>

        <Button
          mode="contained"
          onPress={gerarJogo}
          style={styles.button}
          labelStyle={styles.buttonText}
          icon="dice-multiple"
        >
          Gerar Jogo
        </Button>

        {jogosMegaSena.length > 0 && (
          <>
            <Text style={styles.subTitle}>Último jogo:</Text>
            {renderItem({ item: jogosMegaSena[0], index: 0 })}
            <Divider style={styles.divider} />
            <Text style={styles.subTitle}>Histórico:</Text>
          </>
        )}

        <FlatList
          data={jogosMegaSena.slice(1)}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          style={styles.lista}
        />
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
    color: '#1E8449',
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    color: '#1E8449',
    fontWeight: '700',
    marginVertical: 12,
    alignSelf: 'flex-start',
  },
  button: {
    backgroundColor: '#1E8449',
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
  lista: {
    width: '100%',
    marginTop: 8,
  },
  cardItem: {
    marginBottom: 12,
    backgroundColor: '#fff',
    borderRadius: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    elevation: 3,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
  },
  ball: {
    backgroundColor: '#1E8449',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
  },
  ballText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: '#1E8449',
    marginVertical: 12,
  },
});
