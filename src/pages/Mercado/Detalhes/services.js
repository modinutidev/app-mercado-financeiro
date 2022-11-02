import {db} from '../../../database/DataSource';

export async function comprarAtivo(ativo) {
  const conn = await db;
  console.log(await conn.getRepository('Ativos').save(ativo));
}
