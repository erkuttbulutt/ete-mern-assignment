import React from "react";
import { AiOutlineDelete,AiOutlineEdit } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";

function HomeCard({ post }) {
  const dispatch = useDispatch();
  const deletePost = (id) => {
    dispatch(deletePostAction(id));
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
        Company Name{" "}
        <span className="text-gray-700 text-sm">{post?.companyName}</span>
      </div>
      <div className="text-gray-400 text-lg">
        Company Legal Number{" "}
        <span className="text-gray-700 text-sm">
          {post?.companyLegalNumber}
        </span>
      </div>

      <div className="text-gray-400 text-lg">
        Incorporation Country{" "}
        <span className="text-gray-700 text-sm">
          {post?.incorporationCountry}
        </span>
      </div>

      <div className="text-gray-400 text-lg">
        Website <span className="text-gray-700 text-sm">{post?.website}</span>
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

export default HomeCard;
