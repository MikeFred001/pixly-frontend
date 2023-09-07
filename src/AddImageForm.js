import { useState } from "react";
import axios from "axios";



function AddImageForm() {
  const [formData, setFormData] = useState({ title: ""});
  const [image, setImage] = useState("");


  console.log("Image", image, "Title", formData.title);

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData({ title: value });
  }

  function handleImage(evt) {
    const { files } = evt.target;
    // setFormData({
    //   ...formData,
    //   image: files[0]
    // });
    setImage(files[0]);
  }


  function handleApi(evt) {
    // const formD = new FormData();
    // formD.append('image', image);
    evt.preventDefault();
    const data = {
      title: formData.title,
      url: ""
    }
    axios.post('http://localhost:5000/api/images', data)
      .then(res => console.log(res.data));
  }


  return (
    <form onSubmit={handleApi} style={ { marginTop: "50px" } }>
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