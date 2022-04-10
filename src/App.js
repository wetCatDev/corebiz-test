import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Slider from "./components/Slider/Slider";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {

  const [shop, setShop] = useState([]);
  const [counter, setCounter] = useState(0);

  function handleClick(e) {
    setShop([...shop, e.target.value]);
    setCounter(counter + 1)
  }

  return (
    <div className="App">
      <Navbar shopState={shop} counterState={counter}/>
      <Slider />
      <Products addFunction={handleClick}/>
      <Footer />
    </div>
  );
}

export default App;
