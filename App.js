import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Carteira from './pages/Carteira';
import Mercado from './pages/Mercado';
import Sobre from './pages/Sobre';

function icone(name, size, color) {
  return <Icon name={name} size={size} color={color} />;
}

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Carteira"
          component={Carteira}
          options={{
            headerShown: false,
            tabBarIcon: props =>
              icone('account-balance-wallet', props.size, props.color),
          }}
        />
        <Tab.Screen
          name="Investir"
          component={Mercado}
          options={{
            headerShown: false,
            tabBarIcon: props =>
              icone('local-grocery-store', props.size, props.color),
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            headerShown: false,
            tabBarIcon: props => icone('account-box', props.size, props.color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
