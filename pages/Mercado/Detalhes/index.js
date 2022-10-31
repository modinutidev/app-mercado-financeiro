import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';

export default function Detalhes() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.texto, {fontSize: 16}]}>CODIGO</Text>
        <Text style={[styles.texto, {fontSize: 24}]}>NOME</Text>
        <Text style={[styles.texto, {fontSize: 14}]}>
          Valor abertura: R$ VALOR
        </Text>
        <Text style={[styles.texto, {fontSize: 14}]}>
          Variação do dia: VALOR
        </Text>
        <Text style={[styles.texto, {fontSize: 14}]}>
          Valor atual: R$ VALOR
        </Text>
      </View>

      <View style={styles.containerCompra}>
        <View style={{flex: 1}}>
          <Text style={styles.texto}>Valor:</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.texto}>Quantidade:</Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon
            style={styles.textButton}
            name="money"
            size={14}
            color="white"
          />
          <Text style={styles.textButton}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={[styles.button, {width: '100%'}]}>
        <Icon style={styles.iconButton} name="star" size={14} color="white" />
        <Text style={styles.textButton}>Favoritar</Text>
      </TouchableOpacity>
    </View>
  );
}
