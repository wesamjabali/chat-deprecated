<template>
    <v-app id="inspire">
        <v-navigation-drawer
            v-model="drawer"
            app
            clipped>
            <v-list dense>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-view-dashboard</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Dashboard</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item link>
                    <v-list-item-action>
                        <v-icon>mdi-settings</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title>Settings</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar
            app
            clipped-left>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-toolbar-title>CSCChat</v-toolbar-title>
        </v-app-bar>

        <v-content>
            <div class="page-content">
                <router-view name="page--content" />
            </div>
        </v-content>

        <!--
        <v-footer app>
        <span>&copy; Wesam Jabali 2020</span>
        </v-footer> 
        -->
    </v-app>
</template>

<script>

import Chat from './../Chat.vue';
export default {

    components: {
        Chat
    },

    props: {
        source: String
    },
    data: () => ({
        drawer: null
    }),
    created () {
        this.$vuetify.theme.dark = true;
    }
};
</script>
