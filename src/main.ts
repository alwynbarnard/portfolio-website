import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import { loadFonts } from './plugins/webfontloader';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome';
import {
  faLinkedin,
  faGithub,
  faLinkedinIn,
  faGithubAlt,
} from '../node_modules/@fortawesome/free-brands-svg-icons';
import '@mdi/font/css/materialdesignicons.css';
import './assets/main.css';

// Hotjar heatmap section Begin
import Hotjar from '@hotjar/browser';

const siteId = 3655467;
const hotjarVersion = 6;

Hotjar.init(siteId, hotjarVersion);
// Hotjar heatmap section End

loadFonts();
library.add(faLinkedin, faGithub, faLinkedinIn, faGithubAlt);

createApp(App).component('font-awesome-icon', FontAwesomeIcon);
createApp(App).use(router).use(vuetify).mount('#app');
