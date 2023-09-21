import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const showUser = createAsyncThunk(
  "showUser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://cafescale.com/api/v1/categories/allproducts/8"
    );
    try {
      const result = await response.json();
      console.log(result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const showUserPics = createAsyncThunk(
  "showUserPics",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "http://cafescale.site/api/v1/config?restaurant_id=8"
    );
    try {
      const result = await response.json();
      console.log("Here are the Images", result);
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const UserSlice = createSlice({
  name: "UserSlice",
  initialState: {
    users: [],
    usersImageData: {},
    cart: [], // Initialize an empty cart array
    loading: false,
    error: null,
  },

  reducers: {
    addItemToCart: (state, action) => {
      state.cart.push(action.payload);
    },
                        
  },
  extraReducers: {
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    [showUserPics.pending]: (state) => {
      state.loading = true;
    },
    [showUserPics.fulfilled]: (state, action) => {
      state.loading = false;
      state.usersImageData = action.payload;
    },
    [showUserPics.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
// Action creators are generated for each case reducer function
// const { showUser, showUserPics, addItemToCart } = UserSlice.actions;
export const {addItemToCart,removeFromCart,clearCart} =UserSlice.actions

export default UserSlice.reducer;
