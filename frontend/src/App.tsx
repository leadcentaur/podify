//! Imports
import BookData from "./data.json"
import SearchBar from "./components/SearchBar";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useState } from "react";
import Features from "./components/Features";
import NavBar from "./global/NavBar";

document.body.style.backgroundColor = "#191414";


function App() {

  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="App">
        <NavBar/>
		<SearchBar/>
    </div>
  );
}
export default App;