const api = 'https://brapi.dev/api/';

async function buscarAtivo(ativo) {
  const response = await fetch(`${api}quote/${ativo}`)
    .then(response => response.json())
    .then(json => {
      return json;
    });

  console.log(response);
}

export {buscarAtivo};
