import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import EscudoScreen from './screens/EscudoScreen';
import JogadoresScreen from './screens/JogadoresScreen';
import TitulosScreen from './screens/TitulosScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <View style={styles.container}>
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#e30613',
              tabBarInactiveTintColor: '#555',
              tabBarStyle: {
                backgroundColor: '#f8f8f8',
                borderTopWidth: 0.5,
                borderTopColor: '#ccc',
              },
            }}
          >
            <Tab.Screen
              name='EscudoScreen'
              component={EscudoScreen}
              options={{
                title: 'Escudo',
                tabBarIcon: ({ color, size }) => <Ionicons name='shield' color={color} size={size} />
              }}
            />
            <Tab.Screen
              name='JogadoresScreen'
              component={JogadoresScreen}
              options={{
                title: 'Jogadores',
                tabBarIcon: ({ color, size }) => <Ionicons name='football' color={color} size={size} />
              }}
            />
            <Tab.Screen
              name='TitulosScreen'
              component={TitulosScreen}
              options={{
                title: 'Títulos',
                tabBarIcon: ({ color, size }) => <Ionicons name='trophy' color={color} size={size} />
              }}
            />
          </Tab.Navigator>
        </View>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16
  },
});
