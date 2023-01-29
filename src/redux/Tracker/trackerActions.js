import { trackerSliceAction } from "./trackerSlice";
import { callServer } from "../../utilities/utilities";
import axios from "axios";

export const searchAmazon = (searchValue) => async (dispatch, getState) => {
  dispatch(trackerSliceAction.updateState({ key: "loader", value: true }));

  const { serverUrl } = getState().tracker;
  const URL = "/searchProduct";
  const { url, JSONData } = callServer(URL, searchValue, serverUrl);

  try {
    const response = await axios.post(url, { searchValue: JSONData });
    response.data.reqPrice = "";
    dispatch(
      trackerSliceAction.updateState({
        key: "searchedProductDetails",
        value: response.data,
      })
    );

    dispatch(
      trackerSliceAction.updateState({ key: "searchEmpty", value: false })
    );

    dispatch(trackerSliceAction.updateState({ key: "loader", value: false }));
  } catch (error) {
    console.log("Got an error - " + error);
    dispatch(trackerSliceAction.updateState({ key: "loader", value: false }));
    dispatch(
      trackerSliceAction.updateState({ key: "searchEmpty", value: true })
    );
    alert("Error");
  }
};

export const searchProduct = (searchValue) => async (dispatch) => {
  dispatch(
    trackerSliceAction.updateState({
      key: "searchValue",
      value: searchValue,
    })
  );
  dispatch(searchAmazon(searchValue));
};

export const fetchAllItems = () => {
  return async (dispatch, getState) => {
    dispatch(trackerSliceAction.updateState({ key: "loader", value: true }));
    const { serverUrl } = getState().tracker;
    const URL = "/items";

    const { url } = callServer(URL, {}, serverUrl);

    try {
      const response = await axios.get(url);
      dispatch(
        trackerSliceAction.updateState({
          key: "allProducts",
          value: response.data,
        })
      );
      dispatch(trackerSliceAction.updateState({ key: "loader", value: false }));
    } catch (error) {
      console.log("Got an error - " + error);
      dispatch(trackerSliceAction.updateState({ key: "loader", value: false }));
    }
  };
};

export const addToWatchList = () => async (dispatch, getState) => {
  //
  const { searchedProductDetails, serverUrl } = getState().tracker;
  const URL = "/item/create";
  const obj = {
    name: searchedProductDetails.name,
    // price: searchedProductDetails.price,
    imageUrl: searchedProductDetails.image,
    url: searchedProductDetails.url,
    description: searchedProductDetails.details,
    reqPrice: searchedProductDetails.reqPrice,
    infoEmail: searchedProductDetails.infoEmail,
    priceHistory: {
      date: new Date(),
      price: searchedProductDetails.price,
    },
  };
  const { url, JSONData } = callServer(URL, obj, serverUrl);
  try {
    const response = await axios.post(url, { product: JSONData });
    dispatch(fetchAllItems());
  } catch (error) {
    console.log("Got an error - " + error);
  }
};
