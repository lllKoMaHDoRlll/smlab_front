import { defineStore } from "pinia";
import { ref } from "vue";
import { getArticles } from "../services/fetcher";


export const useStore = defineStore('store', () => {

    const articles = ref([]);

    const fetchArticlesController = ref(null);

    const fetchArticlesPromise = ref();

    async function fetchArticles() {
        fetchArticlesPromise.value = (async () => {
            if (articles.value.length > 0) return;

            fetchArticlesController.value = new AbortController();
            const signal = fetchArticlesController.value.signal;

            const fetchedArticles = await getArticles(signal);
            this.articles.push(...fetchedArticles);
        })();
    }

    function updateArticle(article) {
        this.articles.value[article.id - 1] = article;
    }

    function addArticle(article) {
        this.articles.push(article);
    }

    return { 
        articles,
        fetchArticlesController,
        fetchArticlesPromise,
        fetchArticles, 
        updateArticle, 
        addArticle
    }
});
