<script setup>
import {computed, ref, watch, reactive} from 'vue'

const emit = defineEmits(['update-article'])

const props = defineProps({
    article: Object
});

const state = reactive({
    article: props.article
})

watch(() => state.article, (newArticle) => {
    emit('update-article', newArticle);
}, {deep: true})

watch(() => state.article.isPublished, (newStatus) => {
    console.log("Status was changed: " + newStatus);
})

const notPublishedCursive = computed(() => {
    return state.article.isPublished? 'normal' : 'italic'
})
const authorNameToUpper = computed(() => {
    return state.article.author.toUpperCase()
})

const togglePublishedState = () => {
    state.article.isPublished = !state.article.isPublished;
}
</script>

<template>
    <div class="article" :class="{'not-published': !state.article.isPublished}">
        <div class="article__name">
            <h3>{{ article.name }}</h3>
            <span :style="{'font-style': notPublishedCursive}"> {{ authorNameToUpper }}</span>
        </div>
        <div class="article__publish-date">
            <span>{{ article.publishDate }}</span>
        </div>
        <div class="article__body">
            <p>{{ article.text }}</p>
        </div>
        <div class="article__is-published">
        </div>
        <Button @click="togglePublishedState">
            Toggle
        </Button>
    </div>
</template>

<style scoped>
    .article {
        border: 3px solid whitesmoke;
        border-radius: 2em;
    }

    .not-published {
        border: 3px solid red;
    }

    .article__name {
        text-align: start;
        margin: .5em 0;
        padding-left: 2em;
    }

    .article__name > h3 {
        margin: 0;
        margin-right: 1em;
        display: inline;
    }

    .article__publish-date {
        text-align: start;
        padding-left: 2em;
    }
</style>