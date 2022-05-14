<template>
    <div>
        <h2>I am the Layout</h2>
        <slot name="logo"></slot>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
    </div>
</template>

<script>
export default {
    name: "app-layout",
    
}
</script>

<style scoped>
    h1 {
        color: blue;
    }
</style>