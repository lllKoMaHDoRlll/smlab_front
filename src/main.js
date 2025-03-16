import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import AboutView from './views/AboutView.vue';
import ArticleAddFormView from './views/ArticleAddFormView.vue';
import ArticleView from './views/ArticleView.vue';
import ArticlesView from './views/ArticlesView.vue';
import { createPinia } from 'pinia';
import { useStore } from './store';
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';

import Card from 'primevue/card';
import Button from 'primevue/button';
import Image from 'primevue/image'; 
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';


const pinia = createPinia();

const routes = [
    {path: "/", component: AboutView},
    {path: "/articles", component: ArticlesView},
    {path: "/articles/new", component: ArticleAddFormView},
    {path: "/articles/:id", component: ArticleView, props: (route) => {
        const article = store.articles.find((val) => val.id == route.params.id);
        return { article: article};
    }},
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

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});
app.use(ConfirmationService);
app.use(ToastService);

app.mount('#app')
