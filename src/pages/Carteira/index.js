import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';
import Ativo from '../../components/Ativo';
import {db} from '../../database/DataSource';

export default function Carteira(props) {
  const [ativos, setAtivos] = useState([]);

  useEffect(() => {
    buscarAtivos();
  }, [props]);

  return (
    <SafeAreaView>
      <View style={styles.containerCarteira}>
        <Text style={styles.tituloCarteira}>Minha Carteira</Text>
        <Text style={styles.valorCarteira}>{`R$ ${totalAplicado()}`}</Text>

        <View style={styles.containerResumo}>
          <Text style={styles.valorResumo}>Rendimento: 0,00%</Text>
          <Text style={styles.valorResumo}>
            Vl. aplicado: {`R$ ${totalAplicado()}`}
          </Text>
        </View>
      </View>

      <View
        style={{
          padding: 20,
          height: '100%',
          paddingBottom: 292,
        }}>
        <Text style={styles.tituloLista}>Histórico de compras:</Text>
        <FlatList
          data={ativos}
          renderItem={data => <Ativo ativo={data} />}
          keyExtractor={data => data.id}
        />
      </View>
    </SafeAreaView>
  );

  async function buscarAtivos() {
    const conn = await db;
    const resultado = await conn.query(
      'SELECT *, (valor * quantidade) AS total FROM ativos;',
    );
    setAtivos(resultado);
  }

  function totalAplicado() {
    let total = 0;
    ativos.forEach(item => {
      total += item.total;
    });
    return total.toFixed(2);
  }
}
