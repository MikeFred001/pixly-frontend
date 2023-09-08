import "./Image.css";

/** Renders Image
 *
 * Props: image, ex { id, file_name, url }
 *
 * State: none
 *
 * ImageList -> Image */

function Image({ image, viewImage }) {

  return (
    <div className="Image">
      <img onClick={ () => viewImage(image.id) }id={ image.id } src={ image.url } alt={ image.file_name } />
    </div>
  )
}

export default Image;