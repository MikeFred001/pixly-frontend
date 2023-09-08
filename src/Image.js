import "./Image.css";

function Image({ image }) {

  return (
    <div className="Image">
      <img src={ image.url } alt={ image.file_name } />
    </div>
  )
}

export default Image;