import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type TGroup = 'container' | 'item';

type TOptionsState = {
    container: {
        display       : string;
        flexDirection : string;
        flexWrap      : string;
        flexFlow      : string;
        justifyContent: string;
        alignItems    : string;
        alignContent  : string;
        gap           : string;
        rowGap        : string;
        columnGap     : string;
    },
    item: {
        order     : number;
        flexGrow  : number;
        flexShrink: number;
        flexBasis : string;
        flex      : string;
        alignSelf : string;
    },
    [key: string]: { [key: string]: string | number };
};

type TSetStylePayload = {
    group: TGroup;
    slug: string;
    value: string | number;
}

export const optionsSlice = createSlice({
    name: 'options',

    initialState: {
        container: {
            display       : 'flex',
            flexDirection : 'row',
            flexWrap      : 'nowrap',
            flexFlow      : '',
            justifyContent: 'flex-start',
            alignItems    : 'center',
            alignContent  : 'stretch',
            gap           : '',
            rowGap        : '',
            columnGap     : '',
        },
        item: {
            order     : 0,
            flexGrow  : 0,
            flexShrink: 0,
            flexBasis : 'auto',
            flex      : '',
            alignSelf : 'auto',
        },
    },

    reducers: {
        setStyle: (state: TOptionsState, action: PayloadAction<TSetStylePayload>) => {
            const { group, slug, value } = action.payload;
            state[group as keyof typeof state][slug] = value;

            if (slug === 'rowGap' || slug === 'columnGap') {
                state.container.gap = (state.container.rowGap !== '' ? state.container.rowGap : 'row-gap') + ' ' + (state.container.columnGap !== '' ? state.container.columnGap : 'column-gap');
            }

            if (slug === 'flexDirection' || slug === 'flexWrap') {
                state.container.flexFlow = `${state.container.flexDirection} ${state.container.flexWrap}`;
            }

            if (slug === 'flexBasis' || slug === 'flexGrow' || slug === 'flexShrink') {
                state.item.flex = `${state.item.flexGrow} ${state.item.flexShrink} ${state.item.flexBasis}`;
            }
        },
    },
});

export const { setStyle } = optionsSlice.actions;

export default optionsSlice.reducer;
