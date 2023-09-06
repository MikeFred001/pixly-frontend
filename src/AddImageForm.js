import { useState } from "react";
import axios from "axios";

const formD2 = new FormData();
formD2.append('adsfasdf', 'asfawefasdf');
console.log("FORMD2", formD2);

function AddImageForm() {
  const [formData, setFormData] = useState({ title: "", image: ""});

  console.log("Image", formData.image, "Title", formData.title);

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData({ title: value });
  }

  function handleImage(evt) {
    const { files } = evt.target;
    setFormData({
      ...formData,
      image: files[0]
    });
  }

  function handleApi() {
    // const formD = new FormData();
    // formD.append('image', image);
    const data = {
      title: formData.title,
      file: formData.image
    }
    axios.post('http://localhost:5001/api/images', data)
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