import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuei18n  from 'vue-i18n'
import './assets/css/main.css'
import CN from '@/assets/locale/cn.json'
import EN from '@/assets/locale/en.json'
import KO from '@/assets/locale/ko.json'
import JA from '@/assets/locale/ja.json'
import RU from '@/assets/locale/ru.json'

Vue.use(Vuei18n)
Vue.config.productionTip = false
const messages = {
  en: {
    ...EN
  },
  cn: {
    ...CN
  },
  ko: {
    ...KO
  },
  ja: {
    ...JA
  },
  ru: {
    ...RU
  }
}
const i18n = new Vuei18n({
  locale: 'cn',
  messages
})
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
