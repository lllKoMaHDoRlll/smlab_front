import { defineStore } from "pinia";
import { ref } from "vue";
import { getArticles } from "../services/fetcher";


export const useStore = defineStore('store', () => {

    const articles = ref([]);
    const isArticlesFetched = ref(false);
    async function fetchArticles() {
        try {
            this.articles.push(...(await getArticles()))
            this.isArticlesFetched = true;
        } catch (error) {
            console.error(error);
            this.isArticlesFetched = false;
        }
    }
    function updateArticle(article) {
        this.articles.value[article.id - 1] = article;
    }
    function addArticle(article) {
        this.articles.push(article);
    }
    return {articles, isArticlesFetched, fetchArticles, updateArticle, addArticle}
});
