<script>
import NavBar from './NavBar.vue'

export default {
    components: {
        NavBar
    }
}
</script>

<template>
    <footer>
        <nav>
            <NavBar />
        </nav>
    </footer>
</template>

<style scoped>
footer {
    width: 100vw;
    
    position: absolute;
    bottom: 0px;
}
.nav-bar {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
</style>