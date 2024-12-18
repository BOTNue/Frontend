<script>
import api from '@/services/api';

export default {
    data() {
        return {
            product: "",
            problem: "",
            description: ""
        }
    },
    methods: {
        async sendrequest() {
            try {
                const response = await api.post("/request", {
                product: this.product,
                problem: this.problem,
                description: this.description
            })
            console.log("Request sent successfully", response.data)
            alert("Request made successfully")
            } catch (error) {
                console.error("Failed to send request")
                alert("Failed to send request")
            }
        }
    }
}
</script>

<template>
    <div class="container">
        <h2>Send help request</h2>
        <input v-model="product" type="text" placeholder="Product" />
        <input v-model="problem" type="text" placeholder="Problem" />
        <input v-model="description" type="text" placeholder="Description (optional)" />
        <button class="sendrequest-btn" @click="sendrequest">Send Request</button>
    </div>
</template>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
}
</style>