import React, { useState, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  let [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.slice(0, 10);
        setProducts(formattedData);
      });
  }, []);

  const onChangeInputSearch = (e) => {
    setInputValue(e.target.value);
    console.log("input", e.target.value);
  };

  return (
    <div className="home-page m-top-2">
      <div className="search-container">
        <input
          type="search"
          name="product"
          placeholder="Enter product ..."
          value={inputValue}
          onChange={(e) => onChangeInputSearch(e)}
        />
      </div>

      {/* list of products */}
      {products?.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </div>
  );
};

export default Home;
