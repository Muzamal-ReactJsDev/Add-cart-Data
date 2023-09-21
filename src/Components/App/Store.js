import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../UserDataSlice/UserSlice";
export const store = configureStore({
  reducer: {
    app: UserSlice,
    
  },
});
