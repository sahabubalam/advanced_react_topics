import {createSlice}  from "@reduxjs/toolkit";

export const initialUser ={
    username: '',
    token: '',
    loggedIn: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialUser,
    reducers:{
        setUser:(state, action)=>{
            const {token,username, defaultAccessRight,id} = action.payload;
            return {
                ...state,
                loggedIn: !!id,
                token,
                username,
                defaultAccessRight
            }
        },
        removeUser: () =>{
            return initialUser
        }
    }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer