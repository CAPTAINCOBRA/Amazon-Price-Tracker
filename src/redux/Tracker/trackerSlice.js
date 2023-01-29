import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //
  searchModal: false,
  searchValue: "",
  // serverUrl: "http://localhost:8000/api",
  serverUrl: `${process.env.REACT_APP_SERVER}`,
  amazonServerUrl: "",
  searchedProductDetails: {},
  searchProductId: "",
  allProducts: [],
  searchEmpty: true,
  loader: false,
};

const trackerSlice = createSlice({
  name: "tracker",
  initialState,
  reducers: {
    updateState: (state, action) => {
      const { key, value } = action.payload;
      return {
        ...state,
        [key]: value,
      };
    },
  },
});

export const trackerSliceAction = trackerSlice.actions;
export default trackerSlice;
