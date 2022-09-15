import { React, useState } from "react";
import clothing from "../data";
import "./body.css";

const Body = () => {
  const [dressCode, setDressCode] = useState("casual");
  console.log("Products: ", setDressCode);

  const findItem = (type) => {
    const filteredItems = clothing.filter(
      (clothingItem) =>
        clothingItem.type === type && clothingItem.dressCode === dressCode
    );
    //returns random item array
    //Math.random * either number or length gives you number between zero and one
    //Math.floor rounds to nearest integer
    return filteredItems[Math.floor(Math.random() * filteredItems.length)]
  };

  return (
    <div className="body">
      <div>
        <div className="block-one">
          <h2>What To Wear?</h2>
        </div>
        <div className="block-two">Casual - Formal - Sporty</div>
      </div>
      <div className="button-container">
        <button className="button-one" onClick={() => setDressCode("casual")}>
          Casual
        </button>
        <button className="button-two" onClick={() => setDressCode("sport")}>
          Sport
        </button>
        <button className="button-three" onClick={() => setDressCode("formal")}>
          Formal
        </button>
      </div>
      <div className="outfit-container">
        <div>
          <h1 className="top">Top</h1>
        </div>
        <div className="top-image">
          <img src={findItem('top').imageUrl} 
          alt="shirt"></img>
        </div>
      </div>
      <div className="outfit-container-two">
        <div>
          <h1 className="bottom">Bottoms</h1>
        </div>
        <div className="top-image">
          <img src={findItem('bottom').imageUrl}  alt="pants"></img>
        </div>
      </div>
      <div className="outfit-container-three">
        <div>
          <h1 className="shoes">Shoes</h1>
        </div>
        <div className="top-image">
          <img src={findItem('shoes').imageUrl} alt="shoes"></img>
        </div>
      </div>
    </div>
  );
};

export default Body;
