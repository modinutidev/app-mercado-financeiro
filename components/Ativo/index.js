import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const codigo = 'BBAC22';
const nome = 'Banco de Brasil';
const media = 20.993;
const lucro = 8.886;
const valor = 20.994;

export default function Ativo() {
  return (
    <View
      style={{
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        height: 50,
        flexDirection: 'row',
        marginTop: 10,
      }}>
      {/* <Image style={ativo.logo} /> */}
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 10,
          alignItems: 'center',
        }}>
        <View style={{flex: 1, paddingRight: 10}}>
          <Text style={ativo.labelValores}>Código:</Text>
          <Text style={{fontSize: 15, fontWeight: '700'}}>{codigo}</Text>
          {/* <Text style={ativo.nome}>
            {nome.length > 19 ? nome.substring(0, 19) + '...' : nome}
          </Text> */}
        </View>

        <View>
          <Text style={ativo.labelValores}>Média:</Text>
          <Text style={ativo.valores}>{`R$ ${media.toFixed(2)}`}</Text>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <Text style={ativo.labelValores}>Lucro:</Text>
          <Text
            style={[
              ativo.valores,
              lucro > 0 ? {color: 'green'} : {color: 'red'},
            ]}>
            {lucro > 0 ? `+${lucro}%` : `${lucro.toFixed(2)}%`}
          </Text>
        </View>

        <View>
          <Text style={ativo.labelValores}>Vl. atual:</Text>
          <Text style={ativo.valores}>{`R$ ${valor.toFixed(2)}`}</Text>
        </View>
      </View>
    </View>
  );
}

const ativo = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
    backgroundColor: '#9D9D9D',
    borderRadius: 10,
  },
  nome: {
    fontSize: 16,
    fontWeight: '600',
    // backgroundColor: 'red',
  },
  labelValores: {
    fontSize: 11,
    fontWeight: '700',
  },
  valores: {
    fontSize: 14,
    fontWeight: '500',
  },
});
