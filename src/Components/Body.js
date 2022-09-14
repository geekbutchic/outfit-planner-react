import { React, useState } from "react";
import clothing from "../data";
import "./body.css";

const Body = () => {
  const [products, setProducts] = useState(clothing);
  return (
    <div className="body">
      <button className="button-one">Casual</button>
      <span className="button-two">
        <button>Formal</button>
      </span>
      <span className="button-three">
        <button>Sport</button>
      </span>
      {/* {products.clothing.map((product, index) => {
        console.log(product);
        return <li key={index}>{product.description}</li>;
      })} */}
    </div>
  );
};

export default Body;
