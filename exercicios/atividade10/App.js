import 'react-native-gesture-handler';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import EscudoScreen from './screens/EscudoScreen';
import JogadorScreen from './screens/JogadorScreen';
import TitulosScreen from './screens/TitulosScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#a00' },
            headerTintColor: '#fff',
            drawerActiveTintColor: '#a00',
            drawerLabelStyle: { fontSize: 16 },
          }}
        >
          <Drawer.Screen
            name="Escudo"
            component={EscudoScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="shield" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="Jogadores"
            component={JogadorScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="people" color={color} size={size} />
              ),
            }}
          />
          <Drawer.Screen
            name="Títulos"
            component={TitulosScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="trophy" color={color} size={size} />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
