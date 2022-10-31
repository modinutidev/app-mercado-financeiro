const api = 'https://brapi.dev/api/';

function buscarAtivo(ativo) {
  return fetch(`${api}quote/${ativo}`)
    .then(response => response.json())
    .then(json => {
      return json.results[0];
    })
    .catch(() => {
      return false;
    });
}

export {buscarAtivo};
