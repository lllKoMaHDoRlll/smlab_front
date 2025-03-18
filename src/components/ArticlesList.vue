<script setup>

import ArticleThumbnail from '../components/ArticleThumbnail.vue';
import { useStore } from '../store';

const emit = defineEmits(['fetch-error'])
console.log(111);
const store = useStore();



try {
    await store.fetchArticles();
} catch(e) {
    emit('fetch-error');
    console.log(e);
}
</script>


<template>
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
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
}

@media screen and (width > 1080px) {
    .articles-list {
        grid-template-columns: repeat(3, 1fr);
    }
}
</style>