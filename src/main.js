import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText
} from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import App from '@/App';
import router from '@/router';
import '@/assets/styles/index.scss';

library.add(fas, far, fab);

const app = createApp(App);
const pinia = createPinia();

// pinia.use(({ store }) => {
//     /* eslint-disable no-param-reassign */
//     /* eslint-enable no-param-reassign */
// });

app.use(pinia)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .component('font-awesome-layers', FontAwesomeLayers)
    .component('font-awesome-layers-text', FontAwesomeLayersText);

app.mount('#app');
