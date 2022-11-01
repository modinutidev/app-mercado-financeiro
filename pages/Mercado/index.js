import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {buscarAtivo} from './services';
import Detalhes from './Detalhes';

export default function Mercado() {
  const [codigo, setCodigo] = useState('');
  const [resultadoBusca, setResultadoBusca] = useState('');
  const [detalhesAtivo, setDetalhesAtivo] = useState(false);

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
            setDetalhesAtivo(false);
          }}
          maxLength={8}
        />

        <TouchableOpacity
          style={styles.btnBuscar}
          onPress={async () => {
            const res = await buscarAtivo(codigo);
            setResultadoBusca(res);
            setDetalhesAtivo(true);
          }}>
          <Icon
            style={styles.iconButton}
            name="search"
            size={14}
            color="white"
          />
          <Text style={styles.txtButton}>Buscar</Text>
        </TouchableOpacity>
      </View>

      {detalhesAtivo ? (
        resultadoBusca ? (
          <Detalhes detalhes={resultadoBusca}></Detalhes>
        ) : (
          <Text style={{color: 'red'}}>
            Ativo não encontrado, verifique o código digitado =/
          </Text>
        )
      ) : (
        <Text style={styles.tituloLista}>Ações favoritas:</Text>
      )}
    </SafeAreaView>
  );
}
