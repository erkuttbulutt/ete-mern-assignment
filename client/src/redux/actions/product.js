import axios from "axios";
import { toast } from "react-toastify";

export const getProductsAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/getProducts");
    
    dispatch({ type: "GET_POSTS", payload: data });
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
      
    });
    console.log("hataaaaa");
  }
};

export const createProductsAction = (postData) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/createProducts",
      postData
    );
    dispatch({ type: "CREATE_POST", payload: data });
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const updateProductsAction = (id, postData) => async (dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/updateProducts/${id}`,
      postData
    );
    dispatch({ type: "UPDATE_POST", payload: data });
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};

export const deleteProductsAction = (id) => async (dispatch) => {
  try {
    axios.delete(`http://localhost:5000/deleteProducts/${id}`);
    dispatch({ type: "DELETE_POST", payload: id });
  } catch (error) {
    toast(error.response.data.msg, {
      position: "top-right",
      autoClose: 5000,
    });
  }
};
