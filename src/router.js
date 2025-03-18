import { createRouter, createWebHistory } from 'vue-router';
import AboutView from './views/AboutView.vue';
import ArticleAddFormView from './views/ArticleAddFormView.vue';
import ArticleView from './views/ArticleView.vue';
import ArticlesView from './views/ArticlesView.vue';
import CarouselView from './views/CarouselView.vue';
import ListView from './views/ListView.vue';
import TableView from './views/TableView.vue';


const routes = [
    {path: "/", component: AboutView},
    {path: "/articles", component: ArticlesView},
    {path: "/articles/new", component: ArticleAddFormView},
    {path: "/articles/:id", component: ArticleView},
    {path: "/carousel", component: CarouselView},
    {path: "/table", component: TableView},
    {path: "/list", component: ListView}
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
