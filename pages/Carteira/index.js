import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Ativo from '../../components/Ativo';

export default function Carteira() {
  return (
    <SafeAreaView>
      <View style={styles.containerCarteira}>
        <Text style={styles.tituloCarteira}>Minha Carteira</Text>
        <Text style={styles.valorCarteira}>2.800,00</Text>

        <View style={styles.containerResumo}>
          <Text style={styles.valorResumo}>Rendimento: +8,88%</Text>
          <Text style={styles.valorResumo}>Vl. aplicado: 2.400,00</Text>
        </View>
      </View>

      <View style={{padding: 20}}>
        <Text style={styles.tituloLista}>Ações em carteira:</Text>

        <Ativo />
        <Ativo />
        <Ativo />
        <Ativo />
        <Ativo />
        <Ativo />
        <Ativo />
        <Ativo />
        <Ativo />
      </View>
    </SafeAreaView>
  );
}
