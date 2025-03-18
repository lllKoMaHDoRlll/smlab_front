<script setup>
import OrderList from 'primevue/orderlist';

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
        <div class="list">
            <OrderList v-model="items" dataKey="id" breakpoint="575px">
                <template #option="{ option }">
                    {{ option.name }}
                </template>
            </OrderList>
        </div>
    </div>
</template>

<style scoped>
.card {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.list {
    width: max-content;
    margin: 0 auto;
}
</style>