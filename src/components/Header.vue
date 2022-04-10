<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script> 
// import { bus } from "../main";

export default {
    name: "app-header",
    props: {
        title: {
            type: String
        }
    },
}
</script>

<style scoped>
    header {
        background: rgb(221, 232, 235);
        padding: 6px;
    }

    h1 {
        color: #222;
        text-align: center;
    }
</style>
