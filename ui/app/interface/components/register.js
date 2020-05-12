export default function (Vue) {
    Vue.component('FormWrapper', require('./forms/FormWrapper.vue').default);
    Vue.component('FormField', require('./forms/FormField.vue').default);
    Vue.component('InputText', require('./inputs/InputText.vue').default);

    Vue.component('Modal', require('./../components/modals/Modal.vue').default);
}

