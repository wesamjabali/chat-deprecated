import GenericRouterView from './../components/GenericRouterView.vue';

import DashboardIndex from './../views/dashboard/DashboardIndex.vue';

export default [
    {
        name: 'dashboard',
        path: '/',
        components: {
            'page--content': GenericRouterView
        },
        redirect: {
            name: 'dashboard->index'
        },
        children: [
            {
                name: 'dashboard->index',
                path: '',
                component: DashboardIndex,
                meta: {
                    pageTitle: 'Dashboard'
                }
            }
        ]
    }
];
