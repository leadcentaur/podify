//! Imports
import BookData from "./data.json"
//! Components
import SearchBar from "./components/SearchBar";
//! Styles

document.body.style.backgroundColor = "#242f40";
const App: React.FC<{}> = (): JSX.Element => (
  <div className=" flex flex-col h-screen items-center   bg-[#242f40] flex items-center ">
    <h1 className="m-5 text-3xl text-white ">Spotify podcast search</h1>
    <SearchBar/>
  </div>

)

export default App;