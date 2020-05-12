<template>
    <v-row justify="center">
        <v-dialog v-model="show"
                  persistent
                  max-width="600px">
            <template #activator="{ on }">
                <v-btn color="primary"
                       dark
                       v-on="on">
                    Open Dialog
                </v-btn>
            </template>
            <v-card>
                <game-create-update-delete-form action="create" />
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
import RoomCreateUpdateDeleteForm from '../../forms/RoomCreateUpdateDeleteForm.vue';
export default {
    components: { RoomCreateUpdateDeleteForm },
    data () {
        return {
            show: false
        };
    },

    methods: {
        close() {
            this.show = false;
        }
    }
};
</script>
