import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

const codigo = 'BBAC22';
const media = 20.993;
const lucro = 8.886;
const valor = 20.994;

export default function Ativo() {
  return (
    <View style={styles.container}>
      <View style={styles.containerInfos}>
        <View style={{flex: 1, paddingRight: 10}}>
          <Text style={styles.labelValor}>Código:</Text>
          <Text style={styles.valor}>{codigo}</Text>
        </View>

        <View>
          <Text style={styles.labelValor}>Média:</Text>
          <Text style={styles.valor}>{`R$ ${media.toFixed(2)}`}</Text>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.labelValor}>Lucro:</Text>
          <Text
            style={[
              styles.valor,
              lucro > 0 ? {color: 'green'} : {color: 'red'},
            ]}>
            {lucro > 0 ? `+${lucro.toFixed(2)}%` : `${lucro.toFixed(2)}%`}
          </Text>
        </View>

        <View>
          <Text style={styles.labelValor}>Vl. atual:</Text>
          <Text style={styles.valor}>{`R$ ${valor.toFixed(2)}`}</Text>
        </View>
      </View>
    </View>
  );
}
