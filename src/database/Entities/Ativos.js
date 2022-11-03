const {EntitySchema} = require('typeorm');

const Ativos = new EntitySchema({
  name: 'Ativos',
  tableName: 'ativos',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true,
    },
    codigo: {
      type: 'varchar',
    },
    nome: {
      type: 'varchar',
    },
    valor: {
      type: 'decimal',
    },
    quantidade: {
      type: 'int',
    },
  },
});

export default Ativos;
