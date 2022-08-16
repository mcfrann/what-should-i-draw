const apiCalls = {
  fetchAdjective() {
    return fetch(
      'https://random-word-form.herokuapp.com/random/adjective'
    ).then((response) => response.json())
  },
  fetchNoun() {
    return fetch('https://random-word-form.herokuapp.com/random/noun').then(
      (response) => response.json()
    )
  }
}

export default apiCalls
