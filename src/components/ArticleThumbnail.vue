<script setup>
    import store from "/src/store/";
    import { RouterLink } from "vue-router";

    const props = defineProps({
        article: Object,
        required: true
    });
</script>



<template>
    <div class="article" :class="{'not-published': !article.isPublished}">
        <div class="article__name">
            <h3>{{ article.name }}</h3>
        </div>
        <div class="article__publish-date">
            <span>{{ article.publishDate }}</span>
        </div>
        <RouterLink :to="'/articles/' + article.id">Read</RouterLink>
    </div>
</template>

<style scoped> 
    .article {
        border: 3px solid whitesmoke;
        border-radius: 2em;
        display: flex;
        gap: 1em;
        align-items: center;
        padding : 0 1em;
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