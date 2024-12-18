<script>
export default {
    data() {
        return {

        }
    },
    methods: {

    },
    props: ['items']
}
</script>

<template>
    <ul>
        <li v-for="item in items">
            <a :href="item.url"> {{ item.text }} </a>
        </li>
    </ul>
</template>

<style scoped></style>