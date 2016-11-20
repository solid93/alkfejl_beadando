'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    apiTokens() {
        return this.hasMany('App/Model/Token')
    }

    tasks () {
        return this.belongsToMany('App/Model/Task')
    }

}

module.exports = User
