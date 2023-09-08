import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import "./Home.css";

/** Renders Home
 *
 * Props:
 * - images, ex. [{ id, file_name, url)}, ...]
 *
 * State: None
 *
 * App -> Home -> { SearchBar, ImageList } */

function Home({ images }) {

  return (
    <div>
      <SearchBar />
      <ImageList images={ images } />
    </div>
  )
}

export default Home;