'use strict'

const Schema = use('Schema')

class TasksTableSchema extends Schema {

    up() {
        this.create('tasks', (table) => {
            table.increments()
            table.text('body')
            table.boolean('completed').defaultTo(false)
            table.date('completed_at')
            table.timestamps()
        })
    }

    down() {
        this.drop('tasks')
    }

}

module.exports = TasksTableSchema
