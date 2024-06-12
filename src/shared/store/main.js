import {createSlice} from "@reduxjs/toolkit";
import placeholder_picture from '.././images/placeholder_user.png'

const initialState = {
    token: '',
    number: '',
    isAuth: false,
    user: {},
    userPicture: placeholder_picture
}

const mainSlice = createSlice({
    name: 'mainSlice',
    initialState,
    reducers: {
        setUserData (state, action) {
            state.isAuth = true
            state.user = action.payload
        },
        setAuth (state, action) {
            state.isAuth = action.payload
        },
        /* eslint-disable */
        setResetData (state, action) {
            state.number = action.payload.number,
            state.token = action.payload.token
        },
        setUserPicture (state, action) {
            state.userPicture = action.payload
        }
    }
})

export const {setAuth, setResetData, setUserData, setUserPicture} = mainSlice.actions

export default mainSlice.reducer