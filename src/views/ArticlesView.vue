<script setup>
import ArticleThumbnail from '../components/ArticleThumbnail.vue';
import { useStore } from '../store';

const store = useStore();


</script>

<template>
    <h1>Articles</h1>
    <div class="articles-list" v-if="store.isArticlesFetched">
        <ArticleThumbnail
            v-for="article in store.articles"
            :key="article.id"
            :article="article"
        />
    </div>
    <div class="try-fetch-articles" v-else>
        <p>An error was occured during fetching articles!</p>
        <Button @click="store.fetchArticles()">Try again</Button>
    </div>
</template>

<style scoped>
.articles-list {
    display: flex;
    flex-direction: column;
    gap: 2em;
}
</style>