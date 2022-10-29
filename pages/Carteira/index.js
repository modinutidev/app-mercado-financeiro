import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import Ativo from '../../components/Ativo';

export default function Carteira() {
  return (
    <SafeAreaView>
      <View
        style={{
          height: 145,
          backgroundColor: '#A01DAB',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={resultado.tituloCarteira}>Minha Carteira</Text>
        <Text style={resultado.valorCarteira}>2.800,00</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            justifyContent: 'space-around',
          }}>
          <Text style={resultado.valorResumo}>Rendimento: +8,88%</Text>
          <Text style={resultado.valorResumo}>Vl. aplicado: 2.400,00</Text>
        </View>
      </View>

      <View style={{padding: 20}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          Ações em carteira:
        </Text>
        <Ativo />
        <Ativo />
        <Ativo />
        <Ativo />
      </View>
    </SafeAreaView>
  );
}

function styleText(size, weight, color) {
  const style = StyleSheet.create({
    styleText: {
      fontSize: size,
      fontWeight: weight,
      color: color,
    },
  });
  return style.styleText;
}

const resultado = StyleSheet.create({
  tituloCarteira: {
    fontSize: 14,
    fontWeight: '700',
    color: 'white',
  },
  valorResumo: {
    fontSize: 11,
    fontWeight: '400',
    color: 'white',
  },
  valorCarteira: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
  },
});
