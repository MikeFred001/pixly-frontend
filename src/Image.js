import "./Image.css";

/** Renders Image
 *
 * Props: image, ex { id, file_name, url }
 *
 * State: none
 *
 * ImageList -> Image */

function Image({ image }) {

  return (
    <div className="Image">
      <img src={ image.url } alt={ image.file_name } />
    </div>
  )
}

export default Image;