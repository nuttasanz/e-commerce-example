import { ENDPOINT } from "@/constants/endpoint";
import axiosInstance from "@/lib/axiosInstance";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  user: any;
  loading: boolean;
}

const initialState: User = {
  user: {},
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setLoading: (state, action: PayloadAction<any>) => {
      state.loading = action.payload;
    },
    clearState: (state) => {
      state.user = {};
    },
  },
});

export const { setUser, setLoading, clearState } = userSlice.actions;
export default userSlice.reducer;

export const login = (body: any) => {
  return async (dispatch: any) => {
    try {
      dispatch(clearState());
      dispatch(setLoading(true));
      const response = await axiosInstance.post(`${ENDPOINT.LOGIN}`, body);
      dispatch(setUser(response.data.data));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
};
