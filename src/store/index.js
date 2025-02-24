import { reactive } from "vue";

const store = reactive({
    articles: [],
    fetchArticles: async () => {
        await fetch("/data/articles.json")
            .then(response => response.json())
            .then(response => store.articles.push(...response));
    },
    updateArticle: (article) => {
        store.articles.value[article.id - 1] = article;
    },
    addArticle: (article) => {
        store.articles.push(article);
    }
});

await store.fetchArticles();

export default store;
