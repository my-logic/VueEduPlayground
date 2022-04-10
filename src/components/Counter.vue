<template>
    <div class="home">
        <span class="counters">  
            <div>
                <h2>State Counter: </h2>
                <div 
                    class="store-counter"
                    :style="{ color: $store.state.colorCode }"
                >
                    {{ $store.state.counter }}
                </div>
                <CounterSquared />
                <div class="buttons">
                    <button @click="$store.commit('decreaseCounter')">-</button>
                    <button @click="$store.dispatch('increaseCounter')">+</button>
                </div>
            </div>
            <div>
                <h2>Local Counter: </h2>
                <div class="local-counter">
                    {{ localCounter }}
                </div>
                <div class="buttons">
                    <button @click="decreaseCounter">-</button>
                    <button @click="increaseCounter">+</button>
                </div>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter color code"
                        v-model="colorCode"
                    >
                </div>
            </div>
        </span>
    </div>
</template>

<script>
import CounterSquared from "./CounterSquared.vue";

export default {
    name: 'my-home',
    components: {
        CounterSquared,
    },
    data() {
        return {
            localCounter: 0,
        }
    },
    computed: {
        colorCode: {
            get() {
                return this.$store.state.colorCode;
            },
            set(newValue) {
                console.log(newValue);
                this.$store.dispatch('setColorCode', newValue);
            },
        }
    },
    methods: {
        increaseCounter() {
            this.localCounter++;
        },
        decreaseCounter() {
            this.localCounter--;
        }
    }
}
</script>

<style scoped>
.counters {
    display: flex;
    /* flex-wrap: wrap; */
    justify-content: center;
}
div {
    margin-bottom: 10px;
}
.store-counter {
    font-size: 55px;
}
.local-counter {
    font-size: 80px;
}
.buttons button {
    font-size: 40px;
    width: 100px;
    margin: 0 10px;
    border-radius: 10px;
}
</style>