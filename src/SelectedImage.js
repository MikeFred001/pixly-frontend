import "./SelectedImage.css";

/** Renders Image
 *
 * Props: image, ex { id, file_name, url }
 *
 * State: none
 *
 * ImageList -> Image */

function SelectedImage({ image, clearImage }) {

  return (
    <div onClick={ clearImage } className="SelectedImage">
      <img className="SelectedImage-img" id={ image.id } src={ image.url } alt={ image.file_name } />
    </div>
  )

}

export default SelectedImage;