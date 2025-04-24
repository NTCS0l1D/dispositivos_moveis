import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import ReceitaScreen from './src/screens/ReceitaScreen';
import { Provider as PaperProvider } from 'react-native-paper';

const Stack = createStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Receitas' }} />
          <Stack.Screen name="Detalhes" component={ReceitaScreen} options={{ title: 'Detalhes da Receita' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
