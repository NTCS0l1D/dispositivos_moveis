import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button, Icon, MD3Colors } from 'react-native-paper'

export default function App() {

  const lista = ["uva", "Maça", "Banana", "Laranja"]


  return (
    <PaperProvider>
      <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Button mode='contained' onPress={() => alert("Clicou")}>Clique!</Button>
        <Button mode='contained-tonal' onPress={() => alert("Clicou")}>Clique!</Button>
        <Button icon="message" mode='contained-tonal' onPress={() => alert("Clicou")}>Clique!</Button>
        <Button mode='elevated' onPress={() => alert("Clicou")}>Clique!</Button>
        <Button mode='outlined' onPress={() => alert("Clicou")}>Clique!</Button>
        <Button mode='text' onPress={() => alert("Clicou")}>Clique!</Button>
        
        <Text>Africa Twin</Text>
        <Divider style={{width:'100%'}}/>
        <Text>CBR 1000 RR</Text>
        <Divider style={{width:'100%'}}/>
        <Text>CB 650</Text>
        <Divider style={{width:'100%'}}/>
        <Text>XRE Sahara</Text>
        <Divider style={{width:'100%'}}/>

        <Text variant='titleLarge' >XRE 190</Text>
        <Text variant='headlineLarge' >CG 160 TITAN</Text>
        <Text variant='displayLarge' >CB 300F TWISTER</Text>

        <Card>
          <Card.Content style={{backgroundColor:'#778899'}}>
            <Title style={{fontSize: 25, fontWeight: 900, color:'white'}}>Africa Twin</Title>
            <Paragraph style={{color:'white'}}>A Honda Africa Twin é uma motocicleta de aventura conhecida por sua robustez, desempenho versátil e capacidade off-road. Equipada com um motor potente, tecnologia avançada e um design que equilibra conforto e resistência, ela é ideal tanto para viagens longas quanto para trilhas desafiadoras. Seu histórico nas competições de rally e sua confiabilidade fazem dela uma das escolhas favoritas entre os motociclistas aventureiros.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://cdn.motor1.com/images/mgl/gZGoN/s1/2022-honda-crf1100l-africa-twin-adventure-sports---pearl-white-blue-red---king-of-the-mountain.jpg'}} />
        </Card>

        <Icon
          source="email"
          color={MD3Colors.error50}
          size={45}
        />
        <Icon
          source='cellphone'
          color={MD3Colors.error50}
          size={45}
           />
       

      </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10
  },
});