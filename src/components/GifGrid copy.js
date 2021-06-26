import React, { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  
  const [Images, setImages] = useState([]);

  useEffect(() => {

    getGifs(category).then( img=> setImages(img))
   
  }, [category]);

  return (
    <>
    <h3>{category}</h3>
    <div className="card-grid">
      {Images.map((img) => {
        return <GifGridItem 
        key={img.id}
        {...img}
        />
      })}
    </div>
    </>
  );
};
