import Image from "./Image.js";
import "./ImageList.css";

/** Renders Image List
 *
 * Props:
 * - images, ex. [{ id, file_name, url }, ...]
 *
 * State: none
 *
 * Home -> ImageList -> Image */
function ImageList({ images, viewImage }) {
  return (
    <div className="ImageList">
      { images.map(image => <Image image={ image } viewImage={ viewImage } />) }
    </div>
  )
}

export default ImageList;