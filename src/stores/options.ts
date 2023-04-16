import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
    name: 'options',
    
    initialState: {
        display       : 'flex',
        flexDirection : 'row',
        flexWrap      : 'nowrap',
        justifyContent: 'flex-start',
        alignItems    : 'center',
        alignContent  : 'stretch',
        order         : 0,
        flexGrow      : 0,
        flexShrink    : 0,
        flexBasis     : 'auto',
        alignSelf     : 'auto',
    },

    reducers: {
        setDisplay: (state, action) => {
            state.display = action.payload;
        },
        setFlexDirection: (state, action) => {
            state.flexDirection = action.payload;
        },
        setFlexWrap: (state, action) => {
            state.flexWrap = action.payload;
        },
        setJustifyContent: (state, action) => {
            state.justifyContent = action.payload;
        },
        setAlignItems: (state, action) => {
            state.alignItems = action.payload;
        },
        setAlignContent: (state, action) => {
            state.alignContent = action.payload;
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setFlexGrow: (state, action) => {
            state.flexGrow = action.payload;
        },
        setFlexShrink: (state, action) => {
            state.flexShrink = action.payload;
        },
        setFlexBasis: (state, action) => {
            state.flexBasis = action.payload;
        },
        setAlignSelf: (state, action) => {
            state.alignSelf = action.payload;
        },
    },
});

export const {
    setDisplay,
    setFlexDirection,
    setFlexWrap,
    setJustifyContent,
    setAlignItems,
    setAlignContent,
    setOrder,
    setFlexGrow,
    setFlexShrink,
    setFlexBasis,
    setAlignSelf,
} = optionsSlice.actions;

export default optionsSlice.reducer;
