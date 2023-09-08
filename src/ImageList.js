import Image from "./Image.js";
import "./ImageList.css";

function ImageList({ images }) {
  return (
    <div className="ImageList">
      { images.map(image => <Image image={ image } />) }
    </div>
  )
}

export default ImageList;