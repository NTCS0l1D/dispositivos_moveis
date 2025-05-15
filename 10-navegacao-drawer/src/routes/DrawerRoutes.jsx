import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {Ionicons} from '@expo/vector-icons'
import HomeScreen from '../screens/HomeScreen.'
import ConfigScreen from '../screens/ConfigScreen'
import ProfileScreen from '../screens/ProfileScreen'
import UserSCreen from '../screens/UserScreen'

const Drawer = createDrawerNavigator()

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen 
        name='HomeScreen' 
        component={HomeScreen} 
        options={{title:'Inicio', drawerIcon: ({color, size}) => <Ionicons name='home' color={color} size={size}/> 
        }}/>
        <Drawer.Screen name='ConfigScreen' component={ConfigScreen} options={{title:'Configuração', drawerIcon: ({color, size}) => <Ionicons name='settings' color={color} size={size}/> 
        }}/>
        <Drawer.Screen name='ProfileScreen' component={ProfileScreen} options={{title:'Perfil'}}/>
        <Drawer.Screen name='UserScreen' component={UserSCreen}/>
    </Drawer.Navigator>
  )
}