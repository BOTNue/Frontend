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
        async signup() {
            try {
                const response = await api.post("/user", {
                    name: this.name,
                    password: this.password
                });
                console.log("User created:", response.data)
                alert("Signup successful") 
            } catch (error) {
                console.error("Singup failed", error)
                alert("Signup failed")
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Sign up</h2>
        <p>Enter in a name and password</p>
        <input v-model="name" type="text" placeholder="Name" />
        <input v-model="password" type="text" placeholder="Password" />
        <button class="signup-btn" @click="signup">Sign up</button>
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