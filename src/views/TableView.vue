<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import locale from '../locales/locales';

const items = [
    {
        id: '1000',
        code: 'f230fh0g3',
        name: 'Bamboo Watch',
        category: 'Accessories',
        quantity: 24
    },
    {
        id: '1001',
        code: 'df7df98h',
        name: 'Steel bar',
        category: 'Materials',
        quantity: 85
    },
    {
        id: '1002',
        code: 'dfdf7d9f',
        name: 'Smartphone',
        category: 'Gadjets',
        quantity: 45
    },
    {
        id: '1003',
        code: 'sd5762j',
        name: 'Plank',
        category: 'Material',
        quantity: 23
    },
    {
        id: '1004',
        code: '00fdf62k',
        name: 'Article',
        category: 'Knowledge',
        quantity: 90
    },
];

</script>

<template>
    <div class="card">
        <DataTable :value="items" tableStyle="min-width: 50rem">
            <Column field="code" :header="locale.table.code"></Column>
            <Column field="name" :header="locale.table.name"></Column>
            <Column field="category" :header="locale.table.category"></Column>
            <Column field="quantity" :header="locale.table.quantity"></Column>
        </DataTable>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
}
</style>