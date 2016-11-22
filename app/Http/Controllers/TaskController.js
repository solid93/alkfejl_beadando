const Task = use('App/Model/Task')
const User = use('App/Model/User')


class TaskController {

    * index(request, response) {
        const tasks = yield Task
            .query().where('completed', 0)
            .orderBy('id', 'asc')
            .with('users')
            .fetch()

        // console.log(tasks.toJSON())

        yield response.sendView('pages.tasks', {tasks: tasks.toJSON()})

    }

    static get inject() {
        return ['App/Model/Task']
    }

    constructor(Task) {
        this.Task = Task
    }


    * create(request, response) {
        const users = yield User.pair('id', 'name')
        // console.log(users)
        yield response.sendView('crud.create-task', {users: users})

    }

    * store(request, response) {
        const task = new Task()
        task.title = request.input('title')
        task.body = request.input('body')
        task.completed = 0

        yield task.save()

        const users = request.input('names')
        yield task.users().attach(users)

        yield response.route('tasks')
    }

    * complete(request, response) {
        const task = yield Task.findBy('id', request.input('id'))
        task.completed = true
        task.completed_at = Date.now()

        yield task.save() // SQL Update
        yield response.route('tasks')

    }

    * completedTasks(request, response) {
        const tasks = yield Task.query()
            .where('completed', 1)
            .orderBy('id', 'asc')
            .with('users')
            .fetch()

        yield response.sendView('pages.completed-tasks', {tasks: tasks.toJSON()})

    }

    * redoTask(request, response) {
        const task = yield Task.findBy('id', request.input('id'))
        task.completed = false

        yield task.save()
        yield response.route('completed-tasks')

    }

    * edit(request, response) {
        const task = yield Task.query().with('users').where('id', request.param('id')).fetch()
        const everyUser = yield User.pair('id', 'name')

        var selectedUsers = task.toJSON()[0].users
        var selectedUserIds = []
        selectedUsers.forEach(function (value) {
            selectedUserIds.push(value.id)
        });

        yield response.sendView('crud.edit-task',
            {
                task: task.toJSON()[0],
                everyUser: everyUser,
                selectedUserIds: selectedUserIds.map(String)
            })

    }

    * update(request, response) {
        const task = yield Task.findBy('id', request.input('id'))
        task.title = request.input('title')
        task.body = request.input('body')

        yield task.save()

        const users = request.input('names')
        yield task.users().sync(users)

        yield response.route('tasks')

    }

    * delete(request, response) {
        const task = yield Task.find(request.input('id'))
        const userIds = yield User.ids()

        yield task.users().detach(userIds)
        yield task.delete()

        yield response.route('tasks')

    }
}

module.exports = TaskController
