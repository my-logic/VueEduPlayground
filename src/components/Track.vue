<template>
    <div id="track">
        <h1>Dynamic CSS with Taxis</h1>
        <!-- on-click do the opposite thing -->
        <button @click="nearby = !nearby">Toggle nearby</button>
        <button @click="available = !available">Toggle available</button>
        <div :class="computedClasses">
            <span>Felipe's Taxi</span>
        </div>
        <h1>Conditionals</h1>
            <button v-on:click="error = !error">Toggle error</button>
            <button v-on:click="success = !success">Toggle success</button>
            <!-- conditional method 1 (cannot show both at the same time) -->
            <p v-if="error" class="error">Error (method 1)</p>
            <p v-else-if="success" class="success">Success (method 1)</p>
            <!-- conditional method 1 (both can be true at the same time) -->
            <p v-show="error" class="error">There has been an error</p>
            <p v-show="success" class="success">Whooo, success :)</p>
        <h1>Track</h1>
        <div id="canvas" v-on:mousemove="updateXY">{{ x }} , {{ y }}</div>
    </div>
</template>

<script>

export default {
    name: "mouse-tracker",
    data() {
        return {
            x: 0,
            y: 0,
            available: false,
            nearby: false,
            error: false,
            success: false
        }
    },
    computed: {
        computedClasses: function(){
            return{
                available: this.available,
                nearby: this.nearby,
            }
        }
    },
    methods: {
        updateXY(event){
            this.x = event.offsetX;
            this.y = event.offsetY;
        }
    }
}
</script>

<style scoped>
#track {
    position: absolute;
    left: 25%;
}

#canvas{
    width: 600px;
    padding: 100px 20px;
    text-align: center;
    border: 1px solid #333;
}

span{
    background: red;
    display: inline-block;
    padding: 10px;
    color: #fff;
    margin: 10px 0;
}

.available span{
    background: green;
}

.nearby span:after{
    content: "is nearby";
    margin-left: 10px;
}

.error{
    background: red;
    padding: 10px;
    color: white;
}

.success{
    background: green;
    padding: 10px;
    color: white;
}
</style>