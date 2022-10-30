import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Ativo from '../../components/Ativo';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Mercado() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloPagina}>Mercado</Text>

      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <TextInput
          style={styles.input}
          placeholder="Digite o código do ativo..."
        />
        <TouchableOpacity style={styles.btnBuscar}>
          <Icon
            style={styles.iconButton}
            name="search"
            size={14}
            color="white"
          />
          <Text style={styles.txtButton}>Buscar</Text>
        </TouchableOpacity>
      </View>

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
