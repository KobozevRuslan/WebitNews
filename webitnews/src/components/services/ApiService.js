const apiUrl = ' https://content.guardianapis.com/search?q=sport&show-tags=all&page-size=7&show-fields=all&order-by=relevance&api-key=0cc1c5bc-7fe4-47bc-80cc-f17c13be193c';

class ApiService {
  static fetchShows = async () => {
    // const url = `${apiUrl}?q=${searchQuery}&language=en&number=8&offset=0`
    const response = await fetch(apiUrl, { method: 'GET'})
    const result = await response.json()
    // console.log(result.response.results);
    return result.response.results
  }
}

export default ApiService;