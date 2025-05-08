import { StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';

export default function TitulosScreen() {
  const titulos = [
    {
      nome: "Campeonato Brasileiro",
      anos: [1980, 1982, 1983, 1992, 2009, 2019, 2020]
    },
    {
      nome: "Copa Libertadores da América",
      anos: [1981, 2019, 2022]
    },
    {
      nome: "Copa do Brasil",
      anos: [1990, 2006, 2013, 2022, 2024]
    },
    {
      nome: "Supercopa do Brasil",
      anos: [2020, 2021, 2025]
    }
  ];

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.nome}</Title>
        <Paragraph>
          Anos: {item.anos.join(', ')}
        </Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={titulos}
        keyExtractor={(item) => item.nome}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
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
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4
  }
});
