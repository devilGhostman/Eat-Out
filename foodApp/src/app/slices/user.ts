import { createSlice } from '@reduxjs/toolkit'
import { userLogin } from '../../api/apiCall';

export interface userState {
    user:null,
    token:string | null,
    isLoading:boolean,
    isError:boolean
}

const initialState: userState = {
    user:null,
    token:null,
    isLoading:false,
    isError:false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
   loginStart: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload.existingUser;
      state.token = action.payload.token;
    },
    loginFailure: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },

  },
})

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;

export const loginHandler = async(dispatch: any,userDetails: { email: string; password: string; })=>{
    dispatch(loginStart());
    try {
        const res = await userLogin(userDetails)
        dispatch(loginSuccess(res))
    } catch (err) {
        dispatch(loginFailure());
    }
}