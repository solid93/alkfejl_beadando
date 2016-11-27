'use strict'

const Lucid = use('Lucid')

class User extends Lucid {
    static get rules () {
        return {
            name:'required',
            email: 'required|max:50|unique:users,email',
            password:'required'
        }
    }

    tasks () {
        return this.belongsToMany('App/Model/Task','user_task', 'user_id', 'task_id')
    }

    apiTokens() {
        return this.hasMany('App/Model/Token')
    }


}

module.exports = User
