/* -------------------------------------------------------------------------- */
/* ROUTES MAP                                                                 */
/* -------------------------------------------------------------------------- */

import * as Layout from '@/layouts';

/**
 * Components
 */
import App from '@pages/App';

/**
 * Routes
 */
const routes = [
    {
        name     : 'App',
        path     : '/',
        layout   : Layout.DefaultLayout,
        component: App,
        children : []
    },
];

export default routes;
