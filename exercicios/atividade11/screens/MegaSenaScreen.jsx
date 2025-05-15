import React, { useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import { Button, Card } from 'react-native-paper';

export default function MegaSenaScreen() {
  const [jogoGerado, setJogoGerado] = useState([]);
  const [jogosMegaSena, setJogosMegaSena] = useState([]);

  const gerarJogo = () => {
    const novoJogo = [];
    while (novoJogo.length < 6) {
      const numero = Math.floor(Math.random() * 60) + 1;
      if (!novoJogo.includes(numero)) {
        novoJogo.push(numero);
      }
    }
    novoJogo.sort((a, b) => a - b);
    setJogoGerado(novoJogo);
    setJogosMegaSena([novoJogo, ...jogosMegaSena]);
  };

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Button mode="contained" onPress={gerarJogo} style={{ marginBottom: 16 }}>
        Gerar Jogo
      </Button>

      <FlatList
        data={jogosMegaSena}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={{ marginBottom: 8 }}>
            <Card.Content>
              <Text>Jogo: {item.join(' - ')}</Text>
            </Card.Content>
          </Card>
        )}
      />
    </View>
  );
}
