<script setup>
import locale from '../locales/locales';


</script>

<template>
    <h1>{{ locale.aboutUs.aboutUs }}</h1>
    <div class="links">
        <RouterLink to="/articles/">{{ locale.aboutUs.articles }}</RouterLink>
        <RouterLink to="/articles/new/">{{ locale.aboutUs.addNewArticle }}</RouterLink>
    </div>
</template>

<style scoped>
    .links {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>