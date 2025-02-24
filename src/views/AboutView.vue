<template>
    <h1>About us</h1>
    <div class="links">
        <RouterLink to="/articles/">Articles</RouterLink>
        <RouterLink to="/articles/new/">Add new article</RouterLink>
    </div>
</template>

<style scoped>
    .links {
        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>