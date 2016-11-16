'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    apiTokens() {
        return this.hasMany('App/Model/Token')
    }

    // cards () {
    //     return this.belongsToMany('App/Model/Card')
    // }

}

module.exports = User
