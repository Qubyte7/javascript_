import React, { useState } from "react";
import Filter from "./filter";
import Descriprion from "./product_description";

const Product = () => {

  return (
    <div>
      <div className="aura-header flex flex-row gap-15 justify-center">
        <img
          src="/images/logo_black.svg"
          alt="aura logo"
          className="w-[3rem]"
        />
        <h1 className="text-5xl font-display-crash-medium">Aura</h1>
      </div>
      <div className="product-content grid grid-cols-2 place-content-center gap-15 ">
        <div className="bg-[#EFEFEF] rounded-lg h-[70vh] flex items-center justify-center">
          <img src="/images/product.png" alt="product image" className=""/>
        </div>
        <Descriprion/>
      </div>
    </div>
  );
};

export default Product;
