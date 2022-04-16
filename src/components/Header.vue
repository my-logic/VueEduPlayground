<template>
    <header>
        <h1>{{ title }}</h1>
        <nav>
            <ul>
                <li>
                    <router-link to="/about" exact>About</router-link>
                    <router-link to="/count" exact>Count</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
// import { bus } from "../main";

export default {
    name: "app-header",
    props: {
        title: {
            type: String,
        },
    },
};
</script>

<style scoped>
header {
    background: lightblue;
    padding: 6px;
    width: 95vw;
}

h1 {
    color: #222;
    text-align: center;
}

ul{
    list-style-type: none;
    text-align: center;
    margin: 0;
}

li{
    display: inline-block;
    margin: 0 10px;
}

/* the html DOM element that stands for router-link */
a{
    color: #fff;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}

nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}

/* to view this see html elements inpector  */
.router-link-active{ 
    background: #eee;
    color: #444;
}
</style>
