<template>
    <div>
        <v-text-field
            v-model="input"
            v-bind="{label, rules: [validator]}" />
    </div>
</template>

<script>

import input from './../../mixins/inputs.mixin';

export default {

    mixins: [
        input
    ]

};
</script>
