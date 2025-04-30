import React, { useState, useEffect } from "react";
import NavigationBarWeb from "../Composant/NavigationBarWeb";
import Items_cocktails from "../Composant/Items_cocktails.tsx";

 const List = () => {
  return (
    <div className="mt-32 flex justify-center items-center ">
    <div className=" grid grid-rows-3 grid-cols-3 gap-[10vh] justify-center items-center">
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
      <Items_cocktails />
    </div>
    </div>
  );
 } ;

export default List;
