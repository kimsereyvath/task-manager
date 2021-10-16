<template>
    <div>
        <h1>Create Task</h1>    
        <form class="custom-form" v-on:submit="onSubmit">
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="task.title" type="text" class="form-control" id="title" name="title"  placeholder="Title"/>
            </div>
            <div class="form-group">
                <label for="body">Body</label>
                <textarea v-model="task.body" class="form-control" name="body" id="body" cols="30" rows="10" placeholder="Body"></textarea>
            </div>
            <div class="form-group">
                <label for="due-date">Due Date</label>
                <input name="due-date" v-model="task.dueDate" type="date" class="form-control" id="due-date" placeholder="Due Date"/>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-secondary">Create</button>
            </div>
        
        </form>
    </div>
</template>

<script>
import * as taskService from '../../services/TaskService.js'

export default {
    name: 'tasks-create',
    data: function() {
        return {
            task: {
                title: '',
                body: '',
                dueDate: ''
            }
        }
    },
    methods: {
        onSubmit: async function() {
            event.preventDefault(); //prevent form from subtmit its default method
            const request = {
                task: this.task
            }
            await taskService.createTask(request)
            this.$router.push({name: 'task-all'})
        }
    }
}
</script>
