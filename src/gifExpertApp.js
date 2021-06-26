import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  // const categories=['Hunter','Batman','Dragon Ball'];

  const [category, setcategory] = useState(['Goku']);
  // const HandleAdd=(e)=>{
  //   // setcategory([...category,'HunterXHUnter'])//express
  //   setcategory(cats=>['HunterXHUnter',...category])
  // }
  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      {/* <button type="button" onClick={HandleAdd}>Agregar</button> */}
      <AddCategory setCategories={setcategory}/>
      <ol>{
        category.map((categories)=>(
          <GifGrid
          key={categories} 
          category={categories} />
        ))

        }</ol>
    </>
  );
};

export default GifExpertApp;
