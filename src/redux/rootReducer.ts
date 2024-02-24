import { baseApi } from "./api/baseApi";
import authSlice from "./slice/authSlice";

export const reducer = {
  authData: authSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
