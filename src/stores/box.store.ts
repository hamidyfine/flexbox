import { TBoxAction, TBox, TBoxOptionsSlug } from '@/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TInitialState = {
    items: TBox[];
    active_box_id: string;
}

const initialState: TInitialState = {
    items: [
        {
            label  : 'A',
            id     : '1',
            options: {
                order     : 0,
                flexGrow  : 0,
                flexShrink: 0,
                flexBasis : 'auto',
                alignSelf : 'auto',
            },
        },
        {
            label  : 'B',
            id     : '2',
            options: {
                order     : 0,
                flexGrow  : 0,
                flexShrink: 0,
                flexBasis : 'auto',
                alignSelf : 'auto',
            },
        },
        {
            label  : 'C',
            id     : '3',
            options: {
                order     : 0,
                flexGrow  : 0,
                flexShrink: 0,
                flexBasis : 'auto',
                alignSelf : 'auto',
            },
        },
        {
            label  : 'D',
            id     : '4',
            options: {
                order     : 0,
                flexGrow  : 0,
                flexShrink: 0,
                flexBasis : 'auto',
                alignSelf : 'auto',
            },
        },
        {
            label  : 'E',
            id     : '5',
            options: {
                order     : 0,
                flexGrow  : 0,
                flexShrink: 0,
                flexBasis : 'auto',
                alignSelf : 'auto',
            },
        },
    ],
    active_box_id: '',
};

export const boxSlice = createSlice({
    name: 'box',

    initialState,

    reducers: {
        setActiveBoxId: (state, action) => {
            state.active_box_id = action.payload;
        },
        addNewBox: (state, action) => {
            state.items.push(action.payload);
        },
        removeBox: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        setBoxStyle: (state, action: PayloadAction<TBoxAction>) => {
            const { slug, value }: { slug: TBoxOptionsSlug, value: string } = action.payload;
            const item = state.items.find(item => item.id === state.active_box_id);
            if (item) item.options[slug] = value;
        },
    },
});

export const {
    setBoxStyle,
    setActiveBoxId,
    addNewBox,
    removeBox,
} = boxSlice.actions;

export default boxSlice.reducer;
