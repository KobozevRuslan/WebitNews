class ApiService {
  static fetchShows = async (value = 'sport') => {
    const url = `https://content.guardianapis.com/search?q=${value}&show-tags=all&page-size=7&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c`
    const response = await fetch(url, { method: 'GET'})
    const result = await response.json()
    return result.response.results
  }
}

export default ApiService;