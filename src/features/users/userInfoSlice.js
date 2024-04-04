import { createSlice } from '@reduxjs/toolkit';

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
        logOutUserInfo(state, action) {
            state.data = action.payload;
        },
    },
});

export const { getUserInfo, logOutUserInfo } = userInfoSlice.actions;
export const selectUserInfo = (state) => state.userInfo.data;
export default userInfoSlice.reducer;
