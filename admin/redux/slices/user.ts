import { ENDPOINT } from "@/constants/endpoint";
import axiosInstance from "@/lib/axiosInstance";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { toast } from "sonner";

interface User {
  user: any;
  loading: boolean;
}

const initialState: User = {
  user: null,
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
      state.user = null;
    },
  },
});

export const { setUser, setLoading, clearState } = userSlice.actions;
export default userSlice.reducer;

export const login = (body: any) => {
  return async (dispatch: any) => {
    try {
      await dispatch(clearState());
      await dispatch(setLoading(true));
      const response = await axiosInstance.post(`${ENDPOINT.LOGIN}`, body);
      await dispatch(setUser(response.data.data));
    } catch (error: any) {
      console.warn(error);
      toast.error(error?.response?.data?.message, {
        closeButton: true,
        position: "top-right",
      });
    } finally {
      await dispatch(setLoading(false));
    }
  };
};
