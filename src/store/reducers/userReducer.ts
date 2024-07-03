import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User as FirebaseUser } from 'firebase/auth'
import { RootState } from '..';

export interface UserState {
  user: null | FirebaseUser;
}

/* let userFromLocalStorage = typeof window !== "undefined" ? window.localStorage.getItem('user') : false

const storedUser = userFromLocalStorage
  ? JSON.parse(userFromLocalStorage)
  : null;
   */
const initialState: UserState = {
  user:  null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action: PayloadAction<FirebaseUser>) => {
      state.user = action.payload
    },
    signOut: (state) => {
      state.user = null
    }
  },
})

export const { signIn, signOut } = userSlice.actions

export const selectUser = (state: RootState) => state.user.user

export default userSlice.reducer