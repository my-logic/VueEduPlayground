<template>
    <div>
        <h1>Refs</h1>
        <input type="text" placeholder="What is your favorite food?" ref="input" />
        <button v-on:click="readRefs">Submit</button>
        <p>Your favorite food is: {{ output }}</p>
        <div ref="test">This is just a ref test</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            output: '',
        }
    },
    methods: {
        readRefs: function(){
            console.log(this.$refs);
            console.log(this.$refs.test.innerText);
            this.output = this.$refs.input.value;
        }
    }
}
</script>

<style>

</style>