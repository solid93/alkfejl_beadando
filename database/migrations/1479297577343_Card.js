'use strict'

const Schema = use('Schema')

class CardsTableSchema extends Schema {

    up() {
        this.create('cards', (table) => {
            table.increments()
            table.string('title', 50)
            table.text('body')
            table.boolean('done').defaultTo(false)
            table.date('done_at')
            table.timestamps()
        })
    }

    down() {
        this.drop('cards')
    }

}

module.exports = CardsTableSchema
