'use strict'

const Schema = use('Schema')

class TaskUserTableSchema extends Schema {

    up() {
        this.create('task_user', (table) => {
            table.increments()
            table.integer('user_id').unsigned()
            table.foreign('user_id').references('User.id')
            table.integer('task_id').unsigned()
            table.foreign('task_id').references('Task.id')
            table.timestamps()
        })
    }

    down() {
        this.drop('task_user')
    }

}

module.exports = TaskUserTableSchema
