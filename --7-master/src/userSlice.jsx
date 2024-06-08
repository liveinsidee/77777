// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '',
    birthday: '',
    gender: ''
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            return action.payload;
        }
    }
});

export const { setUser } = userSlice.actions;
export const selectUser = state => state.user;

export default userSlice.reducer;
