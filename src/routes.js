import About from './views/About.vue';
import Counter from './components/Counter.vue';
import NotFound from './views/NotFound.vue';

export default [
    {
        path: '/about', 
        name: 'About',
        component: About
    },
    {
        path: '/count', 
        name: 'Count',
        component: Counter
    },
    // redirect
    { 
        path: '/whatever',
        redirect: '/about'
    },
    // catch all 404
    { 
        path: '/:catchAll(.*)',
        name: 'NotFound',
        component: NotFound
    }
]