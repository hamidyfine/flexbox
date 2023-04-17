import { createSlice } from '@reduxjs/toolkit';

type TBox = {
    label: string;
    id: string;
    options: Record<TOptionsSlug, string | number>;
}

type TOptionsSlug = 'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'flex' | 'alignSelf';

type ItemsState = {
  items: TBox[];
  active_id: string;
  active_box: TBox;
}

export const itemsSlice = createSlice({
    name: 'items',

    initialState: {
        items: [
            {
                label  : 'A',
                id     : '1',
                options: {
                    order     : 0,
                    flexGrow  : 0,
                    flexShrink: 0,
                    flexBasis : 'auto',
                    flex      : '',
                    alignSelf : 'auto',
                },
            },
        ],
        active_id : '',
        active_box: {},
    } as ItemsState,

    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setActiveId: (state, action) => {
            state.active_id = action.payload;
        },
        setActiveBox: (state, action) => {
            state.active_box = action.payload;
        },
        addNewBox: (state, action) => {
            state.items.push(action.payload);
        },
        setItemStyle: (state: ItemsState, action) => {
            const { slug, value }: { slug: TOptionsSlug, value: string } = action.payload;
            const item = state.items.find(item => item.id === state.active_id);
            if (item) item.options[slug] = value;
            // console.log('🚀 ~ file: items.ts:56 ~ item:', JSON.parse(JSON.stringify(state.active_box.options)));
        },
    },
});

export const { setItems, setActiveId, setActiveBox, setItemStyle, addNewBox } = itemsSlice.actions;

export default itemsSlice.reducer;
