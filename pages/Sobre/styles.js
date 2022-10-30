import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSocial: {
    width: 200,
    height: 130,
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  imgPerfil: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: '#A01DAB',
    borderColor: '#A01DAB',
    borderWidth: 0.1,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  btnSocial: {
    width: 200,
    height: 40,
    backgroundColor: '#A01DAB',
    borderRadius: 6,
  },
  txtButton: {
    flex: 1,
    color: 'white',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
