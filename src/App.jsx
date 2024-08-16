import React, { useState } from "react";
import CartCard from "./Components/CartCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
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
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      price: 109.95,
      discountPercentage: 17.91,
      rating:3.9,
      stock:30,
      brand:"cloth",
      category: "men's cloth",
      thumbnail: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      image:"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    }, 
    {
      id: 6,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      description: "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
      price:64,
      discountPercentage: 1.50,
      rating: 3.3,
      stock: 203,
      brand: "electronics",
      category: "electronics",
      thumbnail: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    },
    {
      id: 7,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      price: 695,
      discountPercentage: 17.94,
      rating: 2.1,
      stock: 430,
      brand: "jewel",
      category: "jewellery",
      thumbnail:"https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
      },
      {
      id: 8,
      title: "Mens Casual Slim Fit",
      description:
        "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
      price: 15.99,
      discountPercentage: 10.4,
      rating: 2.1,
      stock: 430,
      brand: "cloth",
      category: "men's cloth",
      thumbnail: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      image:"https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    },
    {
      id: 9,
      title: "Mens Cotton Jacket",
      description:"great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
      price: 55.99,
      discountPercentage: 12.9,
      rating: 4.4,
      stock: 500,
      brand: "cloth",
      category: "cloths",
      thumbnail: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      image:"https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    },
    {
      id: 10,
      title:"Mens Casual Premium Slim Fit T-Shirts ",
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      price: 22.3,
      discountPercentage: 15.91,
      rating:2.9,
      stock:80,
      brand:"cloth",
      category: "men's cloth",
      thumbnail: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      image:"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    }, 
    
    
  ]);
  return (
    <>
      <Navbar/>
      <UserContext.Provider value={{ product, setProduct }}>
        <div className="container my-5">
          <CartCard />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;