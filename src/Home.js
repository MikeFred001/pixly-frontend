import { useState } from "react";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";
import SelectedImage from "./SelectedImage";
import "./Home.css";

/** Renders Home
 *
 * Props:
 * - images, ex. [{ id, file_name, url)}, ...]
 *
 * State: None
 *
 * App -> Home -> { SearchBar, ImageList } */

function Home({ images, filter }) {
  const [selectedImage, setSelectedImage] = useState(null)
  console.log("SELECTED IMAGE", selectedImage);

  function viewImage(id) {
    setSelectedImage(images.find(img => img.id === id));
  }

  function clearImage() {
    setSelectedImage(null);
  }

  return (
    <div>
      <SearchBar filter= { filter } />
      <ImageList images={ images } viewImage={ viewImage } />
      { selectedImage === null ? null : <SelectedImage image={ selectedImage } clearImage={ clearImage } /> }
    </div>
  )
}

export default Home;