import React from 'react';
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import { Title, Paragraph, List, Button } from 'react-native-paper';

export default function ReceitaScreen({ route, navigation }) {
  const { receita } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: receita.imagem }} style={styles.image} />
      
      <View style={styles.textContainer}>
        <Title style={styles.title}>{receita.nome}</Title>
        <Paragraph style={styles.info}>Tempo de Preparo: {receita.tempoPreparo}</Paragraph>
        <Paragraph style={styles.info}>Porções: {receita.porcoes}</Paragraph>
      </View>

      <List.Section title="Ingredientes" style={styles.titulo}>
        {receita.ingredientes.map((item, index) => (
          <List.Item key={index} title={item} />
        ))}
      </List.Section>

      <List.Section title="Modo de Preparo" style={styles.titulo}>
        {receita.modoPreparo.map((passo, index) => (
          <List.Item key={index} title={passo} />
        ))}
      </List.Section>

      <Button mode="outlined" style={styles.button} onPress={() => navigation.goBack()}>
        Voltar
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  image: {
    height: 200,
    borderRadius: 10,
    marginBottom: 16,
  },
  textContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 8,
  },
  titulo: {
    alignItems: 'center'
  },
  info: {
    fontSize: 16,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    marginBottom: 30,
    alignSelf: 'center',
    width: 150,
  },
});
