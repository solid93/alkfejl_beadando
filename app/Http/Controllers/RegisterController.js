const User = use('App/Model/User')
const Hash = use('Hash')
const Validator = use('Validator')

class RegisterController {
    * index(request, response) {
        yield response.sendView('pages.register')
    }

    * register(request, response) {
        const user = new User()
        user.name = request.input('name')
        user.email = request.input('email')
        user.password = yield Hash.make(request.input('password'))

        const userData = request.all()
        const messages = {
            'name.required': 'Kérlek add meg a neved!',
            'email.unique': 'Ezzel az e-mail címmel már regisztráltak!',
            'password.required': 'Kérlek adj meg egy jelszót'
        }
        const validation = yield Validator.validate(userData, User.rules, messages)

        if (validation.fails()) {
            yield request.withOnly('body')
                .andWith({ errors: validation.messages() }).flash()
            response.redirect('back')

            return
        }

        yield user.save()

        // var registerMessage = {
        //     success: 'Registration Successful! Now go ahead and login'
        // }

        yield response.redirect('/')
    }
}

module.exports = RegisterController