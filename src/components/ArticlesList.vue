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
    display: flex;
    flex-direction: column;
    gap: 2em;
}
</style>