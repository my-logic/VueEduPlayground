<template>
    <footer>
        <p>{{ copyright }} {{ title }}</p>
    </footer>
</template>

<script> 

export default {
    name: "app-footer",
    props: {
        title: {
            type: String
        }
    },
    data() {
        return {
            copyright: 'Copyright 2022'
        }
    },
}
</script>

<style scoped>
    footer {
        background: #222;
        padding: 6px;
        width: 100vw;
        position: absolute;
        bottom: 0px;
    }

    p {
        color: lightcoral;
        text-align: center;
    }
</style>