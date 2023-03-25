//! Imports
import BookData from "./data.json"
import SearchBar from "./components/SearchBar";
import SideBar from "./components/SideBar";


document.body.style.backgroundColor = "#242f40";
const App: React.FC<{}> = (): JSX.Element => (
  <div>
    <SideBar childComp={<SearchBar/>}/>
  </div>
)

export default App;