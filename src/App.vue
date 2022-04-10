<template>
  <div id="app">
    <app-header v-bind:title="title"></app-header>
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Felipe's Toy App" />
    <div>
      <a href="#/">Home</a> | <a href="#/about">About</a> |
      <a href="#/non-existent-path">Broken Link</a>
      <component :is="currentView" />
    </div>
    <div v-if="wantToDo">
      <Todo />
    </div>
    <div v-else>
      <product-list-one></product-list-one>
      <product-list-two></product-list-two>
    </div>

    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Todo from "./components/Todo.vue";
import Home from "./components/Home.vue";
import About from "./components/About.vue";
import NotFound from "./components/NotFound.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ProductListOne from "./components/ProductListOne.vue";
import ProductListTwo from "./components/ProductListTwo.vue";

const routes = {
  "/": Home,
  "/about": About,
};

export default {
  name: "App",
  components: {
    HelloWorld,
    Todo,
    "app-header": Header,
    "app-footer": Footer,
    "product-list-one": ProductListOne,
    "product-list-two": ProductListTwo,
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

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: rgb(108, 105, 105);
  background: lightgrey;
}
</style>
