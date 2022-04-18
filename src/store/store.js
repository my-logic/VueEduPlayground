import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            { name: "Open Toe Socks", price: 20 },
            { name: "Slightly Used Diapers", price: 40 },
            { name: "Refurbished Underwear", price: 60 },
            { name: "Leftovers", price: 100 },
        ],
        counter: 0,
        colorCode: 'blue',
    },
    getters: { // we access state in our app from getters (app can't access state directly). We can change or filter the state before it's made available in the app, and deploy that from getters.
        saleProducts: state => {
            const productsOnSale = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                };
            });
            return productsOnSale;
        },
        counterSquared(state) {
            return state.counter * state.counter;
        }
    },
    mutations: { // { mutations are committed } only way to change the data in the state
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });
        },
        increaseCounter(state, randomNumber) {
            console.log('randomNumber: ' + randomNumber);
            state.counter += randomNumber;
        },
        decreaseCounter(state) {
            state.counter--;
        },
        setColorCode(state, newValue) {
            state.colorCode = newValue;
        }
    },
    actions: { // { actions are dispatched } layer between mutations and state that handle asynchronous tasks. Actions cannot change state; if we need to do that we can call mutations from actions
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 2000);
        },
        // increaseCounter({ commit }) {
        //     axios('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5').then(response => {
        //         console.log('response: ', response);
        //         commit('increaseCounter', response.data[0]);
        //     });
        // },
        increaseCounter({ commit }) {
            fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5')
                .then(response => response.json())
                .then(data => {
                    console.log('Data: ', data);
                    commit('increaseCounter', data[0]);
                })
                .catch(err => console.log('error message: ', err.message))
        },
        setColorCode({ commit }, newValue) {
            commit('setColorCode', newValue);
        }
    },
    modules: { // allows us to breakup the store, allowing us to have separate state, actions, mutations, and getters in a different module, one for each different parts of the app (if those sections have different functionality)

    }
});