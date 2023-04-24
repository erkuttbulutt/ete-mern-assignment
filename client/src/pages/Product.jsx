import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { getProductsAction } from "../redux/actions/product";
import { useEffect } from "react";

function Home() {
  const { products } = useSelector((state) => state.products);
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getProductsAction());
    }, []);
  
  return (
    <div className="flex items-center m-5 flex-wrap">
      {products.length > 0 &&
        products?.map((post, i) => <ProductCard key={i} post={post} />)}
    </div>
  );
}

export default Home;
