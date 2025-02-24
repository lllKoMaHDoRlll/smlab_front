<script setup>
import store from "/src/store";
import ArticleThumbnail from '../components/ArticleThumbnail.vue';
</script>

<template>
    <h1>Articles</h1>
    <div class="articles-list">
        <ArticleThumbnail
            v-for="article in store.articles"
            :key="article.id"
            :article="article"
        />
    </div>
</template>

<style scoped>
.articles-list {
    display: flex;
    flex-direction: column;
    gap: 2em;
}
</style>