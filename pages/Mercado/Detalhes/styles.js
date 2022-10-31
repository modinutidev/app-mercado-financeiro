import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 12,
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 10,
  },
  containerCompra: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 20,
  },
  texto: {
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderRadius: 6,
    backgroundColor: '#E4E4E4',
    borderColor: '#D1D1D1',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontWeight: '500',
    marginRight: 10,
    textTransform: 'uppercase',
  },
  button: {
    height: 40,
    width: 120,
    backgroundColor: '#A01DAB',
    borderRadius: 6,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlignVertical: 'center',
  },
  iconButton: {
    textAlignVertical: 'center',
    marginRight: 4,
  },
});
