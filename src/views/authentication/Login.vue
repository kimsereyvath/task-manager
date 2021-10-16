<template>
    <div>
        <h1>Login Route</h1>    
        <form class="custom-form" v-on:submit="onSubmit">
        <div class="form-group">
            <label for="username">Username</label>
            <input v-model="username" type="text" class="form-control" id="username" placeholder="Username"/>
        </div>
        <div class="form-group">
            <label for="password">Password</label>
            <input v-model="password" type="password" class="form-control" id="password" placeholder="Password">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-secondary">Login</button>
        </div>
        
        </form>
    </div>
</template>

<script>
import * as auth from '../../services/AuthService'

export default {
    name: 'login',
    data: function() {
        return {
        username: '',
        password: ''
        }
    },
    methods: {
        onSubmit: async function() {
            //event.preventDefault(); //prevent form from subtmit its default method
            const user = {
                username: this.username,
                password: this.password,
            }
            await auth.login(user)
            //const loginPromise = auth.login(user);
            //await Promise.all([loginPromise]);
            
            this.$router.push({name: 'home'}) //go to home page after submit
        }
    }
}
</script>
