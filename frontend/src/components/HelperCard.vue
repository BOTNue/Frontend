<script>
import api from '@/services/api';

export default {
    data() {
        return {
            helpers: [],
            filteredhelpers: [],
            selectedskills: [],
            skills: [
                "Networking", "Repair", "Construction", "Mechanic", "Computer"
            ]
        }
    },
    async mounted() {
        try {
            const response = await api.get("/helper")
            this.helpers = response.data
            this.filteredhelpers = response.data
        } catch (error) {
            console.error("Failed fetching helpers")
            alert("Unable to load helpers")
        }
    },
    methods: {
        filterbyskills() {
            if (this.selectedskills.length === 0) {
                this.filteredhelpers = this.helpers
            }else {
                this.filteredhelpers = this.helpers.filter(helper => 
                    helper.skills.some(skill => this.selectedskills.includes(skill))
                )
            }
        }
    }
}
</script>

<template>
    <p>Filter helpers by skills</p>
    <label class="category" v-for="skill in skills">
        <input
        v-model="selectedskills"
        :value="skill" 
        type="checkbox"
        @change="filterbyskills">
        {{ skill }}
    </label>
    <ul class="helpercard">
        <li v-for="helper in filteredhelpers" :key="helper._id">
            <strong>Name:</strong> {{ helper.name }} <br>
            <strong>Skills:</strong> {{ helper.skills.join(", ") }} <br>
            <strong>Rating:</strong> {{ helper.rating }}
        </li>
    </ul>
</template>

<style scoped>
.helpercard {
    list-style: none;
    color: aliceblue;
    display: flex;
    gap: 1rem;
    justify-content: space-evenly;
    flex-wrap: wrap;
    
}

.li {
    background-color: black;
}

.category {
    display: flex;
    flex-direction: row;
    gap: 2rem;
}
</style>