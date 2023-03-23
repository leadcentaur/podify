//! Imports
import BookData from "./data.json"
import SearchBar from "./components/SearchBar";


document.body.style.backgroundColor = "#242f40";
const App: React.FC<{}> = (): JSX.Element => (
  <div className="text-center p-5">
    <h1 className="m-5 text-3xl text-white ">Spotify podcast search</h1>
    <SearchBar/>
  </div>

)

export default App;