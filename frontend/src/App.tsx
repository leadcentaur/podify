//! Imports
import BookData from "./data.json"
import SearchBar from "./components/SearchBar";
import SideBar from "./components/global/SideBar";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useState } from "react";
import NavSideBar from "./components/global/SideBar";




document.body.style.backgroundColor = "#242f40";

function App() {

  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="App">
        <SearchBar/>
    </div>
  );
}
export default App;