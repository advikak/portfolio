import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Work from "./components/work/Work";
//import Navbar from "./components/navBar/Navbar";
import { ThemeContext } from "./context";
import "./app.css"


const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    
    darkMode?
    <div className="dark-page"
      style={{
        backgroundColor: darkMode ? "#000" : "white",
        color: darkMode && "white"
      }}
    >

      <Toggle />
      <Intro />
      <About />
      <ProductList />
      <Work/>
    
      
    </div> :
    <div className="page"
    style={{
      backgroundColor: darkMode ? "#222" : "white",
      color: darkMode && "white"
    }}
  >

    <Toggle />
    <Intro />
    <About />
    <ProductList />
    <Work/>
  
    
  </div>
  );
};

export default App;