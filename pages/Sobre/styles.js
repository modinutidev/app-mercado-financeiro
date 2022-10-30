import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSocial: {
    width: 180,
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
    marginBottom: 10,
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  btnSocial: {
    height: 40,
    backgroundColor: '#A01DAB',
    borderRadius: 6,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  txtButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  iconButton: {
    textAlignVertical: 'center',
    marginRight: 4,
  },
});
