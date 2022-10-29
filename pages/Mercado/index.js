import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Ativo from '../../components/Ativo';

export default function Mercado() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloPagina}>Mercado</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o código do ativo..."
      />
      <Text style={styles.tituloLista}>Ações para compra:</Text>
      {/* <Text>Ops! Nenhuma ação encontrada =/</Text> */}
      <Ativo />
      <Ativo />
      <Ativo />
      <Ativo />
      <Ativo />
      <Ativo />
      <Ativo />
      <Ativo />
      <Ativo />
    </SafeAreaView>
  );
}
