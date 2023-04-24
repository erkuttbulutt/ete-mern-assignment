import React from "react";
import { AiOutlineDelete,AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteProductsAction } from "../redux/actions/product";
import { toast } from "react-toastify";

function ProductCard({ post }) {
  const dispatch = useDispatch();
  const deletePost = (id) => {
    dispatch(deleteProductsAction(id));
    window.location.reload();
    toast("Silme işlemi başarılı", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  const updatePost = (id) => {
    dispatch({ type: "MODAL", payload: { open: true, updateId: id } });
  };

  return (
    <div className="relative w-3/5 border p-3 rounded-md bg-gray-50 mx-3 my-2">
      <div className="text-gray-400 text-lg">
        productName{" "}
        <span className="text-gray-700 text-sm">{post?.productName}</span>
      </div>
      <div className="text-gray-400 text-lg">
        productCategory{" "}
        <span className="text-gray-700 text-sm">{post?.productCategory}</span>
      </div>

      <div className="text-gray-400 text-lg">
        productAmount{" "}
        <span className="text-gray-700 text-sm">{post?.productAmount}</span>
      </div>

      <div className="text-gray-400 text-lg">
        amountUnit{" "}
        <span className="text-gray-700 text-sm">{post?.amountUnit}</span>
      </div>
      <div className="text-gray-400 text-lg">
        company <span className="text-gray-700 text-sm">{post?.company}</span>
      </div>

      <div className="absolute -top-3 -right-3 flex items-center space-x-3">
        <AiOutlineDelete
          onClick={() => deletePost(post._id)}
          size={30}
          className="bg-red-500 rounded-full text-white p-1 cursor-pointer"
        />
        <AiOutlineEdit
          onClick={() => updatePost(post._id)}
          size={30}
          className="bg-red-500 rounded-full text-white p-1 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default ProductCard;
