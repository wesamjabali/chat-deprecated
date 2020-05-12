<template>
    <form-wrapper />
</template>

<script>
import forms from './../mixins/forms.mixin';
export default {

    mixins: [
        forms
    ],

    data() {
        return {
            mutatorNames: {
                create: 'CreateRoomMutator'
            }
        };
    }
};
</script>
