import { createApp } from 'vue';
import { createPinia } from 'pinia';
import VueEasyLightbox from 'vue-easy-lightbox';
import App from '@/App';
import router from '@/router';
import '@/assets/styles/index.scss';

const app = createApp(App);
const pinia = createPinia();

// pinia.use(({ store }) => {
//     /* eslint-disable no-param-reassign */
//     /* eslint-enable no-param-reassign */
// });

app.use(pinia)
    .use(router)
    .use(VueEasyLightbox);

app.mount('#app');
