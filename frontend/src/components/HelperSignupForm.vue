<script>
import api from '@/services/api';

export default {
    data() {
        return {
            name: "",
            password: "",
            skills: [],
            rating: ""
        }
    },
    methods: {
        async helpersignup() {
            try {
                const response = await api.post("/helper", {
                    name: this.name,
                    password: this.password,
                    skills: this.skills,
                    rating: this.rating
                })
                console.log("Successfully created helper:", response.data)
                alert("Successfully created helper")
            } catch (error) {
                console.error("Something went wrong creating helper")
                alert("Failed to create helper")
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Helper sign up</h2>
        <input v-model="name" type="text" placeholder="Enter name">
        <input v-model="password "type="text" placeholder="Enter password">
        <div class="checkbox-container">
            <label>
                <input 
                v-model="skills" 
                type="checkbox" 
                value="Networking">Networking
            </label><br>
            <label>
                <input 
                v-model="skills" 
                type="checkbox" 
                value="Repair">Repair
            </label><br>
            <label>
                <input 
                v-model="skills" 
                type="checkbox" 
                value="Construction">Construction
            </label><br>
            <label>
                <input 
                v-model="skills" 
                type="checkbox" 
                value="Mechanic">Mechanic
            </label><br>
            <label>
                <input 
                v-model="skills" 
                type="checkbox" 
                value="Computer">Computer
            </label><br>
        </div>
        <input v-model="rating" type="text" placeholder="Enter rating">
        <button class="helpersignup-btn" @click="helpersignup">Sign up</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.checkbox-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}
</style>