import React, {useRef, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Detalhes from './Detalhes';
import {buscarAtivo} from './services';

export default function Mercado() {
  let [codigo, setCodigo] = useState('');
  let refCodigo = useRef('');
  let [ativo, setAtivo] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.tituloPagina}>Mercado</Text>

      <View style={{flexDirection: 'row', marginVertical: 10}}>
        <TextInput
          style={styles.input}
          placeholder="Digite o código do ativo..."
          placeholderTextColor={'#5b5b5b'}
          value={this.codigo}
          onChangeText={text => {
            setCodigo(text);
          }}
          useRef={refCodigo}
          maxLength={8}
        />

        <TouchableOpacity
          style={styles.btnBuscar}
          onPress={() => buscarAtivo(codigo)}>
          <Icon
            style={styles.iconButton}
            name="search"
            size={14}
            color="white"
          />
          <Text style={styles.txtButton}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {codigo.length <= 0 ? (
        <View>
          <Text style={styles.tituloLista}>Ações favoritas:</Text>
        </View>
      ) : (
        <View>
          <Text>{ativo}</Text>
          <Detalhes></Detalhes>
        </View>
      )}

      {/* <Text>Ops! Nenhuma ação encontrada =/</Text> */}
    </SafeAreaView>
  );
}
