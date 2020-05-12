import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './../interface/routes/app.routes';
import vuetify from './../interface/plugins/vuetify';
import register from '../interface/components/register';
import AppWrapper from '../interface/components/app/AppWrapper.vue';
import base from './../interface/mixins/base.mixin';
let render = createElement => createElement(AppWrapper);

Vue.config.productionTip = false;
Vue.config.devtools = true; //enable in production
Vue.mixin(base);

register(Vue);

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

window.Game = new Vue({
    render,
    router,
    vuetify
}).$mount('#app');
