import React, {useState} from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styles} from './styles';
import {db} from '../../../database/DataSource';
import {useNavigation} from '@react-navigation/native';

export default function Detalhes(props) {
  const navigation = useNavigation();
  const {
    symbol: codigo,
    longName: nome,
    regularMarketPreviousClose: fechamentoAnterior,
    regularMarketPrice: preco,
    regularMarketChangePercent: variacaoDia,
  } = props.detalhes;
  const [valorCompra, setValorCompra] = useState(`${preco.toFixed(2)}`);
  const [qtCompra, setQtCompra] = useState(`1`);

  return (
    <View style={styles.container}>
      <View>
        <Text style={[styles.texto, {fontSize: 16}]}>{codigo}</Text>
        <Text style={[styles.texto, {fontSize: 24}]}>{nome}</Text>
        <Text style={[styles.texto, {fontSize: 14}]}>
          Fech. anterior: R$ {fechamentoAnterior.toFixed(2)}
        </Text>
        <Text style={[styles.texto, {fontSize: 14}]}>
          Variação do dia:{' '}
          {variacaoDia > 0
            ? `+${variacaoDia.toFixed(2)}`
            : variacaoDia.toFixed(2)}
          %
        </Text>
        <Text style={[styles.texto, {fontSize: 14}]}>
          Valor atual: R$ {preco.toFixed(2)}
        </Text>
      </View>

      <View style={styles.containerCompra}>
        <View style={{flex: 1}}>
          <Text style={styles.texto}>Valor:</Text>
          <TextInput
            value={valorCompra}
            onChangeText={input => setValorCompra(input)}
            style={styles.input}
            placeholderTextColor={'#5b5b5b'}
            keyboardType={'numeric'}
          />
        </View>
        <View style={{flex: 1}}>
          <Text style={styles.texto}>Quantidade:</Text>
          <TextInput
            value={qtCompra}
            onChangeText={input => setQtCompra(input)}
            style={styles.input}
            placeholderTextColor={'#5b5b5b'}
            keyboardType={'numeric'}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={salvar}>
          <Icon
            style={styles.iconButton}
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

  async function salvar() {
    const conn = await db;
    await conn
      .getRepository('Ativos')
      .save({codigo, nome, quantidade: qtCompra, valor: valorCompra});
    props.resetInputs();
    navigation.navigate('Carteira', {atualiza: true});
  }
}
