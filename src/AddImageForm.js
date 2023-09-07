import { useState } from "react";
import axios from "axios";



function AddImageForm() {
  const [formData, setFormData] = useState({ title: ""});
  const [image, setImage] = useState("");


  console.log("Image", image, "Image TYPE", typeof image, "Title", formData.title);

  function handleChange(evt) {
    const { value } = evt.target;
    setFormData({ title: value });
  }

  function handleImage(evt) {
    const { files } = evt.target;
    setImage(files[0]);


    // fileToDataUri(files[0])
    //   .then(dataUri => {
    //   setImage(datari)
    // })
  }



  function handleApi(evt) {
    evt.preventDefault();
    const data = {
      title: formData.title,
      imageData: image,
      url: "fakeurl.com"
    }

    axios.post('http://localhost:5001/api/images', data)
      .then(res => console.log(res.data));
  }

  const fileToDataUri = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (evt) => {
        resolve(evt.target.result)
    };
    reader.readAsDataURL(file);
});


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