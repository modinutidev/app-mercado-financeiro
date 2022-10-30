import React from 'react';
import {Image, Text, View, Linking, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Bruno from '../../assets/brunomodinuti.jpg';
import {styles} from './styles';

import Icon from 'react-native-vector-icons/FontAwesome';

export default function Sobre() {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imgPerfil} source={Bruno} />
      <Text>Desenvolvido por:</Text>
      <Text style={styles.nome}>Bruno Modinuti</Text>
      <View style={styles.containerSocial}>
        <TouchableOpacity
          style={styles.btnSocial}
          onPress={() =>
            Linking.openURL('https://br.linkedin.com/in/brunomodinuti')
          }>
          <Icon
            style={styles.iconButton}
            name="linkedin-square"
            size={18}
            color="white"
          />
          <Text style={styles.txtButton}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSocial}
          onPress={() => Linking.openURL('https://github.com/modinutidev')}>
          <Icon
            style={styles.iconButton}
            name="github"
            size={18}
            color="white"
          />
          <Text style={styles.txtButton}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnSocial}
          onPress={() =>
            Linking.openURL('https://www.instagram.com/brunomodinuti/')
          }>
          <Icon
            style={styles.iconButton}
            name="instagram"
            size={18}
            color="white"
          />
          <Text style={styles.txtButton}>Instagram</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
