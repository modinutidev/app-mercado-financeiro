import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Carteira from './src/pages/Carteira';
import Mercado from './src/pages/Mercado';
import Sobre from './src/pages/Sobre';

import db from './src/database/DataSource';

function icone(name, size, color) {
  return <Icon name={name} size={size} color={color} />;
}

export default function App() {
  const Tab = createBottomTabNavigator();

  useEffect(() => {
    db;
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: '#464646',

          tabBarStyle: {
            backgroundColor: '#D9D9D9',
            borderBottomWidth: 0,
            paddingBottom: 4,
            height: 50,
          },
        }}>
        <Tab.Screen
          name="Carteira"
          component={Carteira}
          options={{
            tabBarIcon: props =>
              icone('account-balance-wallet', props.size, props.color),
          }}
        />
        <Tab.Screen
          name="Investir"
          component={Mercado}
          options={{
            tabBarIcon: props =>
              icone('local-grocery-store', props.size, props.color),
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Sobre}
          options={{
            tabBarIcon: props => icone('account-box', props.size, props.color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
