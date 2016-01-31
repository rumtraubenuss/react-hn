import fetchJsonp from 'fetch-jsonp'

const urlTopStories = 'https://hacker-news.firebaseio.com/v0/topstories.json'

fetchJsonp(urlTopStories)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(ex => console.log('Error', ex))
