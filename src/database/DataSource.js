import {DataSource} from 'typeorm';
import Ativos from './Entities/Ativos';

const AppDataSource = new DataSource({
  type: 'react-native',
  database: 'carteira',
  location: 'default',
  logging: ['error', 'query', 'schema'],
  entities: [Ativos],
  synchronize: true,
});

export const db = AppDataSource.initialize()
  .then(console.log('Conectado com sucesso'))
  .catch(error => console.log(error));
