const productReducer = (state = { products: [] }, action) => {
    switch (action.type) {
      case "GET_POSTS":
        return {
            products: action.payload,
        };
      case "CREATE_POST":
        return {
            products: [...state.products, action.payload],
        };
      case "UPDATE_POST":
        return {
            products: [
            ...state.products.map((product) =>
            product._id === action.payload._id ? action.payload : product
            ),
          ],
        };
      case "DELETE_POST":
        return {
            products: [...state.products.filter((product) => product.id !== action.payload)],
        };
  
      default:
        return state;
    }
  };
  
  export default productReducer;
  