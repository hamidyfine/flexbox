import { configureStore } from '@reduxjs/toolkit';

import containerReducer from './container.store';
import boxReducer from './box.store';

export default configureStore({
    reducer: {
        container: containerReducer,
        box      : boxReducer,
    },
});
