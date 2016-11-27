'use strict'

const Lucid = use('Lucid')

class Task extends Lucid {
    static get rules () {
        return {
            body: 'required|max:50',
            names:'array|max:3'
        }
    }

    users() {
        return this.belongsToMany('App/Model/User', 'user_task', 'task_id', 'user_id')
    }

}

module.exports = Task