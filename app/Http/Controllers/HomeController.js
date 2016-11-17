'use strict'

const Card = use('App/Model/Card')

class HomeController {
    * index(request, response) {
        const cards = yield Card.query().where('done', 0).orderBy('id', 'desc').fetch()

        yield response.sendView('home', {cards: cards.toJSON()})
    }

    static get inject() {
        return ['App/Model/Card']
    }

    constructor(Card) {
        this.Card = Card
    }

}

module.exports = HomeController
