import React from 'react';
import {Text} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

function Sobre() {
  return <Text>Teste</Text>;
}

function Home() {
  return <Text>Teste</Text>;
}
function Loja() {
  return <Text>Teste</Text>;
}

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
          component={Sobre}
          options={{
            tabBarIcon: props =>
              icone('account-balance-wallet', props.size, props.color),
          }}
        />
        <Tab.Screen
          name="Mercado"
          component={Loja}
          options={{
            tabBarIcon: props =>
              icone('local-grocery-store', props.size, props.color),
          }}
        />
        <Tab.Screen
          name="Sobre"
          component={Home}
          options={{
            tabBarIcon: props => icone('account-box', props.size, props.color),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
