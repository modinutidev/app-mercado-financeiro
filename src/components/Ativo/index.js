import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export default function Ativo(props) {
  const ativo = props.ativo.item;
  const {codigo, nome, valor, quantidade, total} = ativo;

  return (
    <View style={styles.container}>
      <View style={styles.containerInfos}>
        <View style={{flex: 1, paddingRight: 10}}>
          <Text style={styles.labelValor}>{codigo}</Text>
          <Text style={styles.valor}>
            {nome.length >= 20 ? `${nome.substr(0, 20)}...` : nome}
          </Text>
        </View>

        <View>
          <Text style={styles.labelValor}>Vl. Pago:</Text>
          <Text style={styles.valor}>{`R$ ${valor.toFixed(2)}`}</Text>
        </View>

        <View style={{paddingHorizontal: 10}}>
          <Text style={styles.labelValor}>Qt.</Text>
          <Text style={[styles.valor]}>{`X ${quantidade}`}</Text>
        </View>

        <View>
          <Text style={styles.labelValor}>Vl. Total:</Text>
          <Text style={styles.valor}>{`R$ ${total.toFixed(2)}`}</Text>
        </View>
      </View>
    </View>
  );
}
