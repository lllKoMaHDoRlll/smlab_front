<script setup>
    import { RouterLink } from "vue-router";
    import {computed} from 'vue';

    import { useConfirm } from "primevue/useconfirm";
    import { useToast } from 'primevue/usetoast';

    const toast = useToast();
    
    const confirm = useConfirm();

    const props = defineProps({
        article: Object,
        required: true
    });

    const trimArticleBody = computed(() => {
        return props.article.text.slice(0, 20) + "...";
    });

    const togglePublishedState = () => {
        confirm.require({
            message: 'Are you sure you want to toggle publish state?',
            header: 'Confirmation',
            icon: 'pi pi-exclamation-triangle',
            rejectProps: {
                label: 'Cancel',
                severity: 'secondary',
                outlined: true
            },
            acceptProps: {
                label: 'Yes'
            },
            accept: () => {
                props.article.isPublished = !props.article.isPublished;
                toast.add({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
                confirm.close();
            },
            reject: () => {
                confirm.close();
            }
        });
    };

</script>



<template>    
    <Toast />
    <ConfirmDialog></ConfirmDialog>
    <Card :class="{'not-published': !article.isPublished}" style="width: 25rem; display: flex; flex-direction: column; justify-content: space-between; overflow: hidden">
        <template #header>
            <Image alt="user header" imageStyle="object-fit: contain; width: 100%;" :src="article.imageURL" preview/>
        </template>
        <template #title>{{ article.name }}</template>
        <template #subtitle>{{ article.publishDate }} - {{ article.author }}</template>
        <template #content>
            <p class="m-0">
                {{ trimArticleBody }}
            </p>
        </template>
        <template #footer>
            <div style="display: flex; justify-content: space-around; gap: 1em;">
                <Button label="Toggle" @click="togglePublishedState" severity="secondary" outlined style="width: 100%;"/>
                <RouterLink :to="'/articles/' + article.id" style="width: 100%;">
                    <Button label="See full" style="width: 100%;"/>
                </RouterLink>
            </div>
        </template>
    </Card>
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

    .p-image {
        width: 100%;
    }
</style>