import { React, useState } from "react";
import clothing from "../data";
import "./body.css";

const Body = () => {
  const [products, setProducts] = useState(clothing);

  return (
    <div className="body">
      <div>
        <div className="block-one">
          <h2>What To Wear?</h2>
        </div>
        <div className="block-two">Casual - Formal - Sporty</div>
      </div>
      <div className="button-container">
        <button className="button-one">Casual</button>
        <button className="button-two">Sport</button>
        <button className="button-three">Formal</button>
      </div>
      <div className="outfit-container">
        <div>
          <h1 className="top">Top</h1>
        </div>
        <div className="top-image">
          <img src="https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp" alt="shirt"></img>
        </div>
      </div>
      <div className="outfit-container-two">
        <div>
          <h1 className="bottom">Bottoms</h1>
        </div>
        <div className="top-image">
          <img src="https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp" alt="shirt"></img>
        </div>
      </div>
      <div className="outfit-container-three">
        <div>
          <h1 className="shoes">Shoes</h1>
        </div>
        <div className="top-image">
          <img src="https://slimages.macysassets.com/is/image/MCY/products/0/optimized/19226370_fpx.tif?$browse$&wid=376&fmt=webp" alt="shirt"></img>
        </div>
      </div>
    </div>
  );
};

export default Body;
