<template>
    <div>
            <h1>I am the Form Helper</h1>
        <Layout>
            <h2 slot="header">I am the header {{ title }}</h2>
            <p slot="body">I am the body</p>
        </Layout>
    </div>
</template>

<script>
import Layout from "./Layout.vue"

export default {
    components: {
        'Layout': Layout,
    },
    data() {
        return {
            title: 'Kewl innit?!'
        }
    }
}
</script>

<style scoped>
    h1 {
        color: red;
    }
</style>