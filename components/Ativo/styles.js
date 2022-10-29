import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    height: 50,
    flexDirection: 'row',
    marginTop: 8,
  },
  containerInfos: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  labelValor: {
    fontSize: 11,
    fontWeight: 'bold',
  },
  valor: {
    fontSize: 14,
    fontWeight: '500',
  },
});
