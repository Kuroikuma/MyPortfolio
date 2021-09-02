import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Header from "../../Components/header";

function App() {
  const [colorHeader, setColorHeader] = useState("white");
  const elementRef = useRef();
  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      if (el.isIntersecting) {
        setColorHeader("black");
        console.log("huuh");
      }
    };
    const observer = new IntersectionObserver(onChange, {
      rootMargin: "0px",
    });
    observer.observe(elementRef.current);
  });
  return (
    <div className="container">
      <Header />
      <div className="k">fhgfgrfg</div>
      <div ref={elementRef}>trt</div>
    </div>
  );
}

export default App;
