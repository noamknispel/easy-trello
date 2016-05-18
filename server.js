require('./config')
var Trello = require("trello")
var trello = new Trello(conf.appKey, conf.token)

var listID = conf.listId

cards = [
  // title | description
]

cards.forEach(function(card) {
  details = card.split('|')

  var card = trello.addCard(details[0], details[1], listID)
  card.then((response) => {
    console.log(`Card ${response.name} added \n`)
  })
})
