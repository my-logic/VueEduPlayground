import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    strict: true,
    state: {
        products: [
            { name: "Dirty Socks", price: 20 },
            { name: "Used Diapers", price: 40 },
            { name: "Moonshine Bladder", price: 60 },
            { name: "Stomach Bloater", price: 80 },
        ],
    },
    getters: {
        saleProducts: state => {
            const productsOnSale = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price: product.price / 2
                };
            });
            return productsOnSale;
        }
    },
    mutations: {
        reducePrice: (state, payload) => {
            state.products.forEach(product => {
                product.price -= payload;
            });
        }
    },
    actions: { // layer between mutations and actions that handle asynchronous tasks
        reducePrice: (context, payload) => {
            setTimeout(() => {
                context.commit('reducePrice', payload);
            }, 2000);
        }
    }
});