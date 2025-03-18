import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createPinia } from 'pinia';
import { useStore } from './store';
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura';
import { definePreset } from '@primeuix/themes';
import { router } from './router';

import Card from 'primevue/card';
import Button from 'primevue/button';
import Image from 'primevue/image'; 
import ConfirmDialog from 'primevue/confirmdialog';
import Toast from 'primevue/toast';
import Menu from 'primevue/menu';
import Carousel from 'primevue/carousel';

import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
    },
    
});


const pinia = createPinia();

const app = createApp(App).use(router).use(pinia);

app.component("Button", Button);
app.component("Card", Card);
app.component("Image", Image);
app.component("ConfirmDialog", ConfirmDialog);
app.component("Toast", Toast);
app.component("Menu", Menu);
app.component("Carousel", Carousel);

app.use(PrimeVue, {
    theme: {
        preset: MyPreset
    }
});
app.use(ConfirmationService);
app.use(ToastService);

app.mount('#app')
