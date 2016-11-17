'use strict'

const Card = use('App/Model/Card')

class HomeController {
    * index(request, response) {
        console.log("ashudaohshdu")
        const cards = yield this.Card.all()

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
