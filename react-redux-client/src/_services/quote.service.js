export const quoteService = {
  getToQ
}

function getToQ() {
  const requestOptions = {
    method: 'GET'
  }
  return fetch('http://quotes.rest/qod.json')
          .then(resp => resp.json())
          .then(json => {

            return json
          })
}
