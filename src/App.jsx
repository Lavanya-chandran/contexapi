import React, { useState } from "react";
import CartCard from "./Components/CartCard";
import "bootstrap/dist/css/bootstrap.min.css";

export const UserContext = React.createContext();

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/41zb7hwFUmL._SY445_SX342_QL70_FMwebp_.jpg",
      image: "https://m.media-amazon.com/images/I/71TSx9D2BVL._SX679_.jpg",
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg",
      image: "https://m.media-amazon.com/images/I/31p5cVyRLmL._SY445_SX342_QL70_FMwebp_.jpg",
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/3/3.jpg",
      image: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Ice_Blue_Samsung_Galaxy_S9_Android_handset.jpg",
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      image: "https://media.mobex.in/media/catalog/product/o/p/oppo_f19_pro_fantasy_purple_8gb_ram__1.jpg",
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail: "https://i.dummyjson.com/data/products/5/3.jpg",
      image: "https://images-cdn.ubuy.co.in/633ff647ed8e2e306c7cdcdd-huawei-p30-pro-128gb-8gb-ram-vog-l29.jpg",
    },
  ]);

  return (
    <>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
          <CartCard />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;