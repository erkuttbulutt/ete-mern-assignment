import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { createPostAction, updatePostAction } from "../redux/actions/post";
import { toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { createProductsAction, updateProductsAction } from "../redux/actions/product";

const Modal = () => {
  const location = useLocation();
  const [loc, setLoc] = useState();
  console.log(location.pathname);

  useEffect(() => {
    location.pathname === "/" ? setLoc(true) : setLoc(false);
    console.log(location);
  }, [location]);

  
  const [postData, setPostData] = useState({
    user: "",
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const { modal } = useSelector((state) => state.modal);
  console.log("modal", modal);
  
  if(loc){
  const onchangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const postCreate = () => {
    if(modal?.updateId){
      dispatch(updatePostAction(modal?.updateId,postData));
    }else{
      dispatch(createPostAction(postData));
    }
    
    dispatch({ type: "MODAL", payload: false });
    toast("Ekleme işlemi başarılı", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <div className="w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white w-1/3 p-2 rounded-md">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer"
        >
          <h1 className="font-bold text-2xl">{modal?.updateId? "Edit" :"Add Company"}</h1>
          <AiOutlineClose size={25} />
        </div>

        <div className="my-4 flex flex-col space-y-3">
          <input
            value={postData.companyName}
            name="companyName"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="Company Name"
          />
          <input
            value={postData.companyLegalNumber}
            name="companyLegalNumber"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="companyLegalNumber"
          />
          <input
            value={postData.incorporationCountry}
            name="incorporationCountry"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="incorporationCountry"
          />
          <input
            value={postData.website}
            name="website"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="website"
          />
        </div>
        <div
          onClick={postCreate}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800"
        >
          Ekle
        </div>
      </div>
    </div>
  );
}else{
  const onchangeFunc = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };
  const productCreate = () => {
    if(modal?.updateId){
      dispatch(updateProductsAction(modal?.updateId,postData));
    }else{
      dispatch(createProductsAction(postData));
    }
    
    dispatch({ type: "MODAL", payload: false });
    toast("Ekleme işlemi başarılı", {
      position: "top-right",
      autoClose: 5000,
    });
  };

  return (
    <div className="w-full h-screen bg-opacity-50 bg-black fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div className="bg-white w-1/3 p-2 rounded-md">
        <div
          onClick={() => dispatch({ type: "MODAL", payload: false })}
          className="flex items-center justify-between cursor-pointer"
        >
          <h1 className="font-bold text-2xl">{modal?.updateId? "Edit" :"Add Product"}</h1>
          <AiOutlineClose size={25} />
        </div>

        <div className="my-4 flex flex-col space-y-3">
          <input
            value={postData.productName}
            name="productName"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="productName"
          />
          <input
            value={postData.productCategory}
            name="productCategory"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="productCategory"
          />
          <input
            value={postData.productAmount}
            name="productAmount"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="productAmount"
          />
          <input
            value={postData.amountUnit}
            name="amountUnit"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="amountUnit"
          />
          <input
            value={postData.company}
            name="company"
            onChange={onchangeFunc}
            className="input-style"
            type="text"
            placeholder="company"
          />
        </div>
        <div
          onClick={productCreate}
          className="w-full p-2 text-center bg-indigo-600 text-white cursor-pointer hover:bg-indigo-800"
        >
          Ekle
        </div>
      </div>
    </div>
  );
}
}

export default Modal;
