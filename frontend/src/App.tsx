//! Imports
import BookData from "./data.json"
//! Components
import SearchBar from "./components/SearchBar";
//! Styles
import { Wrapper } from "./App.styles"

const App: React.FC<{}> = (): JSX.Element => (

  <div className="flex flex-col h-screen my-auto items-center bgimg bg-cover">
    <SearchBar/>
  </div>

)

export default App;