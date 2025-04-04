import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView } from 'react-native';
import { PaperProvider, Card, Title, Paragraph, Text, Divider, Button, Icon, MD3Colors } from 'react-native-paper'

export default function App() {


  return (
    <PaperProvider>
      <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <Text  variant='titleLarge'>Big Trail</Text>
        <Text>Neste artigo iremos falar brevemente sobre algumas motos da categoria big trail</Text>

        <Card style={{marginBottom:10, marginTop:10}}>
          <Card.Content style={{backgroundColor:'#778899'}}>
            <Title style={{fontSize: 25, fontWeight: 900, color:'white'}}>Africa Twin</Title>
            <Paragraph style={{color:'white'}}>A Honda Africa Twin é uma motocicleta de aventura conhecida por sua robustez, desempenho versátil e capacidade off-road. Equipada com um motor potente, tecnologia avançada e um design que equilibra conforto e resistência, ela é ideal tanto para viagens longas quanto para trilhas desafiadoras. Seu histórico nas competições de rally e sua confiabilidade fazem dela uma das escolhas favoritas entre os motociclistas aventureiros.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://cdn.motor1.com/images/mgl/gZGoN/s1/2022-honda-crf1100l-africa-twin-adventure-sports---pearl-white-blue-red---king-of-the-mountain.jpg'}} />
        </Card>

        <Card style={{marginBottom:10, marginTop:10}}>
          <Card.Content style={{backgroundColor:'#778899'}}>
            <Title style={{fontSize: 25, fontWeight: 900, color:'white'}}>BMW R 1250 GS</Title>
            <Paragraph style={{color:'white'}}>Uma das Big Trails mais icônicas do mundo, a BMW R 1250 GS combina potência, tecnologia e conforto. Seu motor boxer de 1.254 cc com tecnologia ShiftCam proporciona torque abundante e ótimo desempenho tanto no asfalto quanto no off-road. Conta com modos de pilotagem avançados, suspensão eletrônica e um painel TFT moderno.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.theriders.com.br/wp-content/uploads/2024/08/Captura-de-tela-2024-08-27-101219.png'}} />
        </Card>

        <Card style={{marginBottom:10, marginTop:10}}>
          <Card.Content style={{backgroundColor:'#778899'}}>
            <Title style={{fontSize: 25, fontWeight: 900, color:'white'}}>Yamaha Super Ténéré 1200</Title>
            <Paragraph style={{color:'white'}}>A Yamaha Super Ténéré 1200 é uma opção robusta para quem busca aventura e resistência. Equipada com um motor bicilíndrico de 1.199 cc, transmissão por eixo cardã e eletrônica embarcada, essa moto se destaca pela confiabilidade e pelo conforto em longas viagens.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://www.madornomad.com/wp-content/uploads/2022/04/Yamaha-XT1200Z-Super-Tenere-Review-4.jpg'}} />
        </Card>

        <Card style={{marginBottom:10, marginTop:10}}>
          <Card.Content style={{backgroundColor:'#778899'}}>
            <Title style={{fontSize: 25, fontWeight: 900, color:'white'}}>Ducati Multistrada V4</Title>
            <Paragraph style={{color:'white'}}>A Ducati Multistrada V4 é uma Big Trail voltada para quem busca desempenho esportivo aliado à versatilidade. Seu motor V4 de 1.158 cc entrega potência impressionante, enquanto o pacote eletrônico avançado oferece segurança e controle, incluindo radar de assistência para piloto automático adaptativo.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://motos2025.com.br/wp-content/uploads/2024/09/ducati-multistrada-v4-s-2025-10-19092024-60871-960-720-easy-resizecom.jpg'}} />
        </Card>

        <Card style={{marginTop:10}}>
          <Card.Content style={{backgroundColor:'#778899'}}>
            <Title style={{fontSize: 25, fontWeight: 900, color:'white'}}>KTM 1290 Super Adventure R</Title>
            <Paragraph style={{color:'white'}}>A KTM 1290 Super Adventure R é uma Big Trail voltada para quem busca alto desempenho no off-road. Equipada com um motor V-Twin de 1.301 cc e um conjunto eletrônico avançado, incluindo controle de tração e modos de pilotagem, essa moto se destaca pela sua agilidade e potência. Seu chassi leve e suspensão ajustável tornam a pilotagem dinâmica e confortável, mesmo em terrenos desafiadores.</Paragraph>
          </Card.Content>
          <Card.Cover source={{ uri: 'https://s7g10.scene7.com/is/image/ktm/MY25-KTM-1390-SUPER-ADVENTURE-S-EVO-static6?wid=1000&dpr=off'}} />
        </Card>
        
       

      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
        <Icon
          source="gmail"
          color="#D93025"
          size={45}
        />
        <Icon
          source="facebook"
          color='blue'
          size={45}
        />
        <Icon
          source="instagram"
          color='#E1306C'
          size={45}
        />
        <Icon
          source="whatsapp"
          color='green'
          size={45}
        />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#F0FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10
  },
});