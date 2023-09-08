import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./Home.css";

function Home({ images }) {

  return (
    <div>
      <SearchBar />
      <ImageList images={ images } />
    </div>
  )
}

export default Home;