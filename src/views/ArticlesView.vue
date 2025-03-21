<script setup>
import { ref } from 'vue';
import ArticlesList from '../components/ArticlesList.vue';
import { useStore } from '../store';
import locale from '../locales/locales';

const store = useStore();
const fetchError = ref(false);


const handleFetchError = () => {
    fetchError.value = true;
}
const abortFetching = () => {
    store.fetchArticlesController.abort();
}
</script>

<template>
    <h1>{{ locale.article.articles }}</h1>
    <Suspense v-if="!fetchError">
        <ArticlesList #default @fetch-error="handleFetchError()"></ArticlesList>
        <template class="try-fetch-articles" #fallback>
            <div class="loading--wrapper">
                <div id="loading"></div>
                <Button @click="abortFetching()">{{ locale.fetch.cancel }}</Button>
            </div>
        </template>
    </Suspense>
    <div v-else>
        <p>{{ locale.fetch.error }}</p>
        <Button @click="fetchError = false;store.fetchArticles()">{{ locale.fetch.tryAgain }}</Button>
    </div>
</template>

<style scoped>

.loading--wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
}

#loading {
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(255,255,255,.3);
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
</style>