import { useState } from "react";
import axios from "axios";


/** */
function AddImageForm() {
  const [image, setImage] = useState(undefined);

  console.log("IMAGE", image);

  /** */
  function handleImage(evt) {
    const { files } = evt.target;
    setImage(files[0]);
  }

  /** */
  function handleApi(evt) {
    evt.preventDefault();

    const fd = new FormData();
    fd.append("image", image, image.name);

    axios.post("http://localhost:5000/api/images", fd)
      .then(res => console.log(res));
  }

  return (
    <form onSubmit={ handleApi } style={ { marginTop: "50px" } }>

      <label htmlFor="file">
        <input
          onChange={ handleImage }
          type="file"
          name="file"
          id="file"
          required />
      </label>

      <button>Submit</button>
    </form>
  )
}

export default AddImageForm;