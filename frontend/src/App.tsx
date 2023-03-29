//! Imports
import BookData from "./data.json"
import SearchBar from "./components/SearchBar";
import SideBar from "./components/global/SideBar";
import { Routes, Route } from "react-router-dom";
import { ProSidebarProvider } from 'react-pro-sidebar';
import { useState } from "react";
import NavSideBar from "./components/global/SideBar";




document.body.style.backgroundColor = "#242f40";

const orchestrationFeatures: Feature[] = [
	{
		title: 'Dependency graph',
		description: 'Generates a dependency graph to increase performance and reduce workloads.',
	},
	{
		title: 'Action pipeline',
		description:
			'Executes actions in parallel and in order using a thread pool and our dependency graph.',
	},
	{
		title: 'Action distribution',
		description: 'Distributes actions across multiple machines to increase throughput.',
		status: 'coming-soon',
	},
	{
		title: 'Incremental builds',
		description:
			'With our smart hashing, only rebuild projects that have been touched since the last build.',
	},
];

function App() {

  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <div className="App">
        <SearchBar/>
    </div>
  );
}
export default App;