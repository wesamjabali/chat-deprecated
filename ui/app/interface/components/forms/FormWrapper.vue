<template>
    <v-container :class="$parent.computedClasses">
        <form-field v-for="(field, key) in mutatorFields"
                    :key="key"
                    v-bind="{fieldName: key, field}" />

        <v-card-actions>
            <v-spacer />
            <v-btn color="blue darken-1"
                   text
                   @click="$parent.closeParentModal()">
                Close
            </v-btn>
            <v-btn color="blue darken-1"
                   text
                   @click="$parent.submit()">
                Save
            </v-btn>
        </v-card-actions>
    <!--
        <button v-if="!$parent.inModal"
                class="btn btn-primary btn-block"
                @click="$parent.submit()">
            Submit
        </button>-->
    </v-container>
</template>

<script>
export default {

    computed: {
        mutatorFields() {
            return this.$parent.MutatorInstance.structure;
        },

        entityName() {
            return Utils.capitalize(this.$parent.MutatorInstance.entity);
        }
    }

};
</script>
