//! Imports
import BookData from "./data.json"
//! Components
import SearchBar from "./components/SearchBar";
//! Styles

const App: React.FC<{}> = (): JSX.Element => (
  <div className=" flex flex-col h-screen my-auto items-center bgimg bg-cover">
    <h1 className="m-5 text-3xl ">Search for podcasts</h1>
    <SearchBar/>
  </div>

)

export default App;