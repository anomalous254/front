import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

const initialState = {
    data: {},
};

export const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        getUserInfo(state, action) {
            state.data = action.payload;
        },
    },
});

export const { getUserInfo } = userInfoSlice.actions;
export const selectUserInfo = (state) => state.userInfo.data;
export default userInfoSlice.reducer;
