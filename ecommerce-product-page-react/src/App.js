import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Container from "./components/UI/Container";
import display1 from "./images/image-product-1.jpg";
import display2 from "./images/image-product-2.jpg";
import display3 from "./images/image-product-3.jpg";
import display4 from "./images/image-product-4.jpg";
import thumbnail1 from "./images/image-product-1-thumbnail.jpg";
import thumbnail2 from "./images/image-product-2-thumbnail.jpg";
import thumbnail3 from "./images/image-product-3-thumbnail.jpg";
import thumbnail4 from "./images/image-product-4-thumbnail.jpg";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Autumn Limited Edition",
      display_title: "Fall Limited Edition Sneakers",
      company: "Sneaker Company",
      description:
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
      price: 250.0,
      images: [display1, display2, display3, display4],
      thumbnails: [thumbnail1, thumbnail2, thumbnail3, thumbnail4],
      discount: 0.5,
    },
  ]);

  // const [isMobile, setIsMobile] = useState(true);

  // useEffect(() => {
  //   function handleResize() {
  //     setIsMobile(window.innerWidth <= 768);
  //   }

  //   window.addEventListener("resize", handleResize);

  //   return () => window.removeEventListener("resize", handleResize);
  // });

  return (
    <Container>
      <Header />
      <Main products={products} />
    </Container>
  );
}

export default App;
