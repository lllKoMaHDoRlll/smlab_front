<script setup>
import { ref } from 'vue';

const formFields = ref({
    name: '',
    text: '',
    isPublished: false,
    publishDate: '',
    author: ''
});

</script>

<template>
    <form @submit.prevent>
        <label for="name">Name</label>
        <br/>
        <input type="text" name="name" id="form-name" v-model="formFields.name">
        <br/>
        <label for="text">Text</label>
        <br/>
        <input type="text" name="text" id="form-text" v-model="formFields.text">
        <br/>
        <label for="is-published">Publish</label>
        <br/>
        <input type="checkbox" name="is-published" id="form-is-published" v-model="formFields.isPublished">
        <br/>
        <label for="publish-date">Publish date</label>
        <br/>
        <input type="date" name="publish-date" id="form-publish-date" v-model="formFields.publishDate">
        <br/>
        <label for="author">Author</label>
        <br/>
        <input type="text" name="author" id="form-author" v-model="formFields.author">
        <br/>
        <Button @click="$emit('add-article', formFields)">Add article</Button>
    </form>
</template>