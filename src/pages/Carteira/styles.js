import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerCarteira: {
    height: 145,
    backgroundColor: '#A01DAB',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloCarteira: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white',
  },
  valorResumo: {
    fontSize: 11,
    fontWeight: 'normal',
    color: 'white',
  },
  valorCarteira: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
  },
  tituloLista: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5b5b5b',
  },
  containerResumo: {
    flexDirection: 'row',
    width: '66%',
    justifyContent: 'space-around',
  },
});
