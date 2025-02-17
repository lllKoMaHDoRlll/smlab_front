<script setup>
import { ref, watch, onBeforeMount } from 'vue'
import Article from '/src/components/Article.vue'
import AddArticle from './AddArticle.vue';
const articles = ref([]);

watch(articles, (newValue) => {
    console.log(articles);
}, {deep: true})

const addArticle = (fields) => {
    const article = {
        name: fields.name,
        text: fields.text,
        isPublished: fields.isPublished,
        publishDate: fields.publishDate,
        author: fields.author,
        id: articles.value.length + 1
    };
    articles.value.push(article);
}

const updateArticle = (article) => {
    articles.value[article.id - 1] = article;
}

onBeforeMount(() => {
    fetch("/data/articles.json")
        .then(response => response.json())
        .then(response => articles.value.push(...response));
})

</script>

<template>
    <AddArticle v-on:add-article="addArticle"/>
    <div class="articles-list">
        <Article 
            v-for="article in articles"
            :key="article.id"
            :article="article"
            v-on:update-article="updateArticle"
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