import { TContainerAction, TContainerOptions } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: TContainerOptions = {
    display       : 'flex',
    flexDirection : 'row',
    flexWrap      : 'nowrap',
    justifyContent: 'flex-start',
    alignItems    : 'center',
    alignContent  : 'stretch',
    rowGap        : '',
    columnGap     : '',
};

export const containerSlice = createSlice({
    name: 'container',

    initialState,

    reducers: {
        setContainerStyle: (state, action: PayloadAction<TContainerAction>) => {
            const { slug, value } = action.payload;
            state[slug] = value;
        },
    },
});

export const { setContainerStyle } = containerSlice.actions;

export default containerSlice.reducer;

