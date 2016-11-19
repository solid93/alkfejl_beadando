const Task = use('App/Model/Task')

class TaskController {

    * index(request, response) {
        const tasks = yield Task.query().where('completed', 0).orderBy('id', 'asc').fetch()

        yield response.sendView('pages.tasks', {tasks: tasks.toJSON()})
    }

    static get inject() {
        return ['App/Model/Task']
    }

    constructor(Task) {
        this.Task = Task
    }


    * create(request, response) {
        yield response.sendView('crud.create-task')

    }

    * store(request, response) {
        const task = new Task()
        task.title = request.input('title')
        task.body = request.input('body')
        task.completed = 0

        yield task.save()

        yield response.route('tasks')
    }

    * update(request, response) {
        // const post = yield Post.findBy('id', request.input('id'))
        // post.body = 'Adding some new content'
        //
        // yield post.save() // SQL Update

    }

    * complete(request, response) {
        const task = yield Task.findBy('id', request.input('id'))
        task.done = true

        yield task.save() // SQL Update

        yield response.route('tasks')

    }

    * completedTasks(request, response) {
        const task = yield Task.findBy('id', request.input('id'))
        task.done = true

        yield task.save() // SQL Update

        yield response.route('tasks')

    }


}

module.exports = TaskController
