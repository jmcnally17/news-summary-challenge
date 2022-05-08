const key = require('./apiKey');

class ArticlesApi {
  loadArticles(callback, search = '') {
    const urlSearch = search.replaceAll(' ', '+');
    fetch(`https://content.guardianapis.com/search?q=${urlSearch}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${key()}`)
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
  }
}

module.exports = ArticlesApi;