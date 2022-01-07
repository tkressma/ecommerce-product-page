import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Container from "./components/UI/Container";

function App() {
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
    </Container>
  );
}

export default App;
