import { React, useState } from "react";
import clothing from "../data";
import "./body.css";

const Body = () => {
  const [products, setProducts] = useState(clothing);
  return (
    <div className="body">
      <div><button className="button-one">Casual</button></div>
      <div><button className="button-two">Formal</button></div>
     <div><button className="button-three">Sporty</button></div>
      {/* {products.clothing.map((product, index) => {
        console.log(product);
        return <li key={index}>{product.description}</li>;
      })} */}
    </div>
  );
};

export default Body;
