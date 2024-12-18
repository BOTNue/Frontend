<script>
import api from '@/services/api';

export default {
    data() {
        return {
            name: "",
            password: ""
        }
    },
    methods: {
        async login() {
            try {
                const response = await api.post("/login", {
                    name: this.name,
                    password: this.password
                })
                console.log("Login successful", response.data)
                alert("Login successful")
            } catch (error) {
                console.error("login failed:", error)
                alert("Login failed")
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Login</h2>
        <p>Enter in a name and password</p>
        <input v-model="name" type="text" placeholder="Name" />
        <input v-model="password" type="text" placeholder="Password" />
        <button class="login-btn" @click="login">Login</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
}
</style>