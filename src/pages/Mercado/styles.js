import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  tituloPagina: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5b5b5b',
  },
  input: {
    flex: 1,
    height: 40,
    borderRadius: 6,
    backgroundColor: '#E4E4E4',
    borderColor: '#D1D1D1',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontWeight: '500',
    marginRight: 10,
    textTransform: 'uppercase',
    color: '#5b5b5b',
  },
  btnBuscar: {
    height: 40,
    width: 100,
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
  tituloLista: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5b5b5b',
  },
});
