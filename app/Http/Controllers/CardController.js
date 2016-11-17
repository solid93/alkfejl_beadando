const Card = use('App/Model/Card')

class CardController {
    * index(request, response) {
        yield response.sendView('crud.createCard')
    }

    * create(request, response) {
        const card = new Card()
        card.title = request.input('title')
        card.body = request.input('body')
        card.done = false
        card.done_at = '2010-05-12'

        yield card.save()

        yield response.route('home')
    }

    * update(request, response) {
        const post = yield Post.findBy('id', request.input('id'))
        post.body = 'Adding some new content'

        yield post.save() // SQL Update

    }

}

module.exports = CardController
