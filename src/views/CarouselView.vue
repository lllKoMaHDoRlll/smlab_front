<script setup>
const images = [
    {
        url: "/images/articles/article_1.jpg"
    },
    {
        url: "/images/articles/article_2.jpg"
    },
    {
        url: "/images/articles/article_3.jpg"
    }
]
</script>

<template>
    <div class="card">
        <Carousel :value="images" :numVisible="2" :numScroll="1" circular autoplayInterval="1000">
            <template #item="slotProps">
                <div class="item">
                    <img :src="slotProps.data.url" :alt="slotProps.data.name" class="w-full rounded" style="width: 100%; margin: auto"/>
                </div>
            </template>
        </Carousel>
    </div>

</template>

<style scoped>
.card {
    width: 100%;
}

.item {
    width: 100%;
    height: 100%;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>