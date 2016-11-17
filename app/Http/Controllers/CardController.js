const Card = use('App/Model/Card')

class CardController {
    * index(request, response) {
        yield response.sendView('crud.createCard')
    }

    * create(request, response) {
        const card = new Card()
        card.title = request.input('title')
        card.body = request.input('body')
        card.done = 0

        yield card.save()

        yield response.route('home')
    }

    * update(request, response) {
        const post = yield Post.findBy('id', request.input('id'))
        post.body = 'Adding some new content'

        yield post.save() // SQL Update

    }

    * done(request, response) {
        const card = yield Card.findBy('id', request.input('id'))
        card.done = true

        yield card.save() // SQL Update

        yield response.route('home')

    }

}

module.exports = CardController
