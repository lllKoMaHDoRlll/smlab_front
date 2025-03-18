import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from './views/AboutView.vue';
import ArticleAddFormView from './views/ArticleAddFormView.vue';
import ArticleView from './views/ArticleView.vue';
import ArticlesView from './views/ArticlesView.vue';
import CarouselView from './views/CarouselView.vue';
import ListView from './views/ListView.vue';
import TableView from './views/TableView.vue';
import { createPinia } from 'pinia';
import { useStore } from './store';
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';

import Card from 'primevue/card';
import Button from 'primevue/button';
import Image from 'primevue/image'; 
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import Menu from 'primevue/menu';
import Carousel from 'primevue/carousel';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    },
    
});


const pinia = createPinia();

const routes = [
    {path: "/", component: AboutView},
    {path: "/articles", component: ArticlesView},
    {path: "/articles/new", component: ArticleAddFormView},
    {path: "/articles/:id", component: ArticleView, props: (route) => {
        const article = store.articles.find((val) => val.id == route.params.id);
        return { article: article};
    }},
    {path: "/carousel", component: CarouselView},
    {path: "/table", component: TableView},
    {path: "/list", component: ListView}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

const app = createApp(App).use(router).use(pinia);
const store = useStore();

app.component("Button", Button);
app.component("Card", Card);
app.component("Image", Image);
app.component("ConfirmDialog", ConfirmDialog);
app.component("Toast", Toast);
app.component("Menu", Menu);
app.component("Carousel", Carousel);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    }
});
app.use(ConfirmationService);
app.use(ToastService);

app.mount('#app')
