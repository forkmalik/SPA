import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import Carousel from "./Components/Carousel/Carousel";
import Header from "./Components/Header/Header.jsx";
import MainPage from "./Components/MainPage/MainPage";
import TypePage from "./Components/TypePage/TypePage";

function App() {
  return (
      <div>
        <Header />
        <Routes>
        <Route component="MainPage"/>
        <Route component="TypePage"/>
        </Routes>
        
        {/* <TypePage /> */}
        {/* <Carousel /> */}
      </div>

  );
}

export default App;
