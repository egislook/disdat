const riothing = require('riothing');
// const riothing = require('../../_packs/riothing');
riothing.server({
  url: 'https://disdat.herokuapp.com/',
  fetcher: [
    { 
      name: 'results',
      url: 'https://api.apify.com/v1/JZnJWDDL8qYGRx5WW/crawlers/MquikTFmxyojXfNRZ/lastExec/results?token=wfiMSwXYqRT4Yq5NyXcPzTPzE&simplified=1',
      limit: 300,
    },
  ]
})