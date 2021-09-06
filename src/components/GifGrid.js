import React /*, { useEffect, useState }*/ from "react";
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data:images, loading } = useFetchGifs(category);

  return (
    <>
      <h2 className='animate__animated animate__fadeIn' style={{textAlign: "center"}}>{category}</h2>
      {loading && <p className='animate__animated animate__flash' style={{textAlign: "center"}}>Loading</p>}
      <div className="card-grid" style={{ justifyContent: "center"}}>
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
