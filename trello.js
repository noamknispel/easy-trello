#!/usr/bin/env node
var fs = require('fs')
var conf = {}
var AppConf = require('rc')('trello', conf)

var Trello = require('trello')
var trello = new Trello(conf.appKey, conf.token)

var argv = process.argv.splice(2)

if(!conf.config) {
  console.log("Could not find config file.")
  process.exit(1)
}

if(argv.length < 1) {
  console.log('Missing card/s details.')
  process.exit(1)
}

if(argv.length < 2) {
  cards = fs.readFileSync(argv[0]).toString().split("\n");
} else {
  cards = [`${argv[0]} | ${argv[1]}`]
}

cards.forEach(function(card) {
  details = card.split('|')
  var card = trello.addCard(details[0], details[1], conf.listId)
  card.then((response) => {
    console.log(`Card ${response.name.trim()} added`)
  })
})
