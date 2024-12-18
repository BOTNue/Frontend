<script>
import NavBar from './NavBar.vue'
import LoginButton from './LoginButton.vue'
import SignupButton from './SignupButton.vue'
import SearchBar from './SearchBar.vue'

export default {
    components: {
        NavBar,
        LoginButton,
        SignupButton,
        SearchBar
    }
}
</script>

<template>
    <header>
        <nav>
            <NavBar />
        </nav>
        <div class="search">
            <SearchBar />
        </div>
        <h1></h1>
        <div class="user-action">
            <SignupButton />
            <LoginButton />
        </div>

    </header>
</template>

<style scoped>
header {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    top: 0px;
}

.user-action {
    display: flex;
    align-items: center;
    
}



.nav-bar {
    list-style: none;
    display: flex;
    gap: 10px;
}
</style>