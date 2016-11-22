'use strict'

const Lucid = use('Lucid')

class User extends Lucid {

    tasks () {
        return this.belongsToMany('App/Model/Task','user_task', 'user_id', 'task_id')
    }


    apiTokens() {
        return this.hasMany('App/Model/Token')
    }


}

module.exports = User
