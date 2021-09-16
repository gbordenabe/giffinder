import React, { useState } from "react";
import AddCategory from "./AddCategory";
import GifGrid from "./GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["OnePunch"]);

  return (
    <>
      <h1>Gif Finder</h1>
      <AddCategory setCategories={setCategories} />
      <hr />

      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category}/>
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
