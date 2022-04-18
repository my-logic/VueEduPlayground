<template>
    <div id="app">
        <app-header v-bind:title="title"></app-header>
        <img alt="Vue logo" src="./assets/logo.png" height="200" width="200" />
        <Welcome msg="Welcome to Felipe's Toy App" />
        <router-view></router-view>
        <div>
            <router-link to="/profile">Profile</router-link> |
            <a href="#/">Home</a> | 
            <a href="#/counter">Counter</a> |
            <a href="#/about">About</a> |
            <a href="#/punch">Punch</a> |         
            <a href="#/non-existent-path">Broken Link</a>
            <component :is="currentView" />
        </div>
        <div v-if="wantToDo">
            <Todo />
        </div>
        <div v-else class="product-lists">
            <product-list-one></product-list-one>
            <product-list-two></product-list-two>
            <mouse-tracker></mouse-tracker>
        </div>
        
        <app-footer class="footer" v-bind:title="title"></app-footer>
    </div>
</template>

<script>
import Welcome from "./components/Welcome.vue";
import Todo from "./components/Todo.vue";
import Counter from "./components/Counter.vue";
import About from "./views/About.vue";
import NotFound from "./views/NotFound.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";
import Track from "./components/Track.vue";
import Punchbag from "./components/Punchbag.vue";

const routes = {
    // "/": Home,
    "/counter": Counter,
    "/about": About,
    "/punch": Punchbag,
};

export default {
    name: "App",
    components: {
        Welcome,
        Todo,
        "app-header": Header,
        "app-footer": Footer,
        "product-list-one": ProductListOne,
        "product-list-two": ProductListTwo,
        "mouse-tracker": Track,
        "punchbag": Punchbag,
    },
    data() {
        return {
            currentPath: window.location.hash,
            title: "Felipe's knowledge transmission app",
            wantToDo: false,
        };
    },
    computed: {
        currentView() {
            return routes[this.currentPath.slice(1) || "/"] || NotFound;
        },
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash;
        });
    },
};
</script>

<style>
html {
    height: 100%;
}

body {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: rgb(108, 105, 105);
    background: lightgrey;
    height: 100%;
}

#app {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    align-items: center;
}

.product-lists {
    margin-bottom: 50px;
}
</style>
