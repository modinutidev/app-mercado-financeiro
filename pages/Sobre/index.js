import React from 'react';
import {Image, Text, View, Linking, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Bruno from '../../assets/brunomodinuti.jpg';
import {styles} from './styles';

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imgPerfil} source={Bruno} />
      <Text style={styles.nome}>Bruno Modinuti</Text>
      <View style={styles.containerSocial}>
        <TouchableOpacity
          style={styles.btnSocial}
          onPress={() =>
            Linking.openURL('https://br.linkedin.com/in/brunomodinuti')
          }>
          <Text style={styles.txtButton}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSocial}
          onPress={() => Linking.openURL('https://github.com/modinutidev')}>
          <Text style={styles.txtButton}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSocial}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/brunomodinuti/')
          }>
          <Text style={styles.txtButton}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
