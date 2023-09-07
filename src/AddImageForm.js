import { useState } from "react";
import axios from "axios";


/** */
function AddImageForm() {
  const [formData, setFormData] = useState({ title: "" });
  const [image, setImage] = useState("");

  console.log("Image", image, "Image TYPE", typeof image, "Title", formData.title);

  /** */
  function handleChange(evt) {
    const { value } = evt.target;
    setFormData({ title: value });
  }

  /** */
  function handleImage(evt) {
    const { files } = evt.target;
    setImage(files[0]);
  }

  /** */
  function handleApi(evt) {
    evt.preventDefault();

    const imageTitle = JSON.stringify(formData)
    const blob = new Blob([imageTitle], {type: "application/json"})

    const fd = new FormData();
    fd.append("image", image, image.name);
    fd.append("title", blob);

    axios.post("http://localhost:5005/api/images", fd)
      .then(res => console.log(res));
  }

  return (
    <form onSubmit={ handleApi } style={ { marginTop: "50px" } }>
      <label htmlFor="title">
        Title
        <input style={ { margin: "10px" } }
          onChange={ handleChange }
          name="title"
          id="title"
          value={ formData.title }>
        </input>
      </label>

      <label htmlFor="file">
        File
        <input
          onChange={ handleImage }
          type="file"
          name="file"
          id="file"
          value={ formData.image }>
        </input>
      </label>

      <button>Submit</button>
    </form>
  )
}

export default AddImageForm;