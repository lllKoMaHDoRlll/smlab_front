<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "/src/store/";
import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { z } from 'zod';

import Checkbox from 'primevue/checkbox';
import DatePicker from 'primevue/datepicker';
import InputText from 'primevue/inputtext';
import Textarea from 'primevue/textarea';
import FloatLabel from 'primevue/floatlabel';
import Message from 'primevue/message';

const router = useRouter();
const store = useStore();

// const formFields = ref({
//     name: '',
//     text: '',
//     isPublished: false,
//     publishDate: '',
//     author: ''
// });

const initialValues = reactive({
    articleName: '',
    articleBody: '',
    articlePublishState: false,
    articlePublishDate: '',
    articleAuthor: ''
});

const resolver = ref(zodResolver(
    z.object({
        articleName: z.string().min(5, { message: "Username is too short."}).regex(/\w*/),
        articleBody: z.string().min(5, {message: "Body is too short."}),
        articlePublishState: z.boolean(),
        articlePublishDate: z.date(),
        articleAuthor: z.string().min(5, {message: "Author name is too short."})
    })
))

const onFormSubmit = (event) => {
    if (event.valid) {
        store.addArticle({
            id: store.articles.length + 1,
            name: event.values.articleName,
            text: event.values.articleBody,
            imageURL: "/images/articles/article_2.jpg",
            isPublished: event.values.articlePublishState,
            publishDate: event.values.articlePublishDate,
            author: event.values.articleAuthor
        });
        router.push("/articles");
        console.log(store.articles);
    }
};

</script>

<template>
    <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="form">
        <div style="display: flex; flex-direction: column; gap: 1.5em;">
            <FloatLabel>
                <InputText name="articleName" type="text"/>
                <label for="articleName">Title</label>
            </FloatLabel>
            <Message v-if="$form.articleName?.invalid" severity="error" size="small" variant="simple">{{ $form.articleName.error?.message }}</Message>
            
            <FloatLabel>
                <Textarea name="articleBody" type="text"/>
                <label for="articleBody">Body</label>
            </FloatLabel>
            <Message v-if="$form.articleBody?.invalid" severity="error" size="small" variant="simple">{{ $form.articleBody.error?.message }}</Message>
            <div>
                <Checkbox name="articlePublishState" binary/>
                <label for="articlePublishState"> Do publish </label>
            </div>

            <FloatLabel>
                <DatePicker name="articlePublishDate" fluid dateFormat="dd.mm.y"/>
                <label for="articlePublishDate">Publish date</label>
            </FloatLabel>
            <Message v-if="$form.articlePublishDate?.invalid" severity="error" size="small" variant="simple">{{ $form.articlePublishDate.error?.message }}</Message>

            <FloatLabel>
                <InputText name="articleAuthor" type="text"/>
                <label for="articleAuthor">Author</label>
            </FloatLabel>
            <Message v-if="$form.articleAuthor?.invalid" severity="error" size="small" variant="simple">{{ $form.articleAuthor.error?.message }}</Message>
            
        </div>
        <Button type="submit" severity="secondary" label="Submit" />
    </Form>
    <!-- <form @submit.prevent>
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
        <Button @click="addArticle">Add article</Button>
    </form> -->
</template>

<style scoped>
.form {
    max-width: 200px;
    margin: 0 auto;
}
</style>