import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";
import AddImageForm from "./AddImageForm.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar.js";
import Home from "./Home.js";
import PixlyApi from './Api';

/** Renders PixlyApp
 *
 * Props: none
 *
 * State: images, ex. [{ id, make, model, date_time, file_name, url }, ...]
 *
 * App -> { Home, AddItemForm} */

function App() {
  const [images, setImages] = useState([]);

  console.log("IMAGES", images);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(function fetchImagesOnMount() {
    async function getImages() {
      const imagesRes = await PixlyApi.fetchImages();

      setImages(imagesRes);
      setIsLoading(false);
    }

    getImages();
  }, []);

  function filter(searchTerm) {
    if (searchTerm === "") {
      setImages(images)
    } else {
      setImages(images.filter(i =>
      i.file_name?.includes(searchTerm) ||
      i.make?.includes(searchTerm) ||
      i.model?.includes(searchTerm) ||
      i.date_time?.includes(searchTerm)))
    }
  }

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={ <Home images={ images } filter={ filter } /> }/>

          <Route path="/upload" element={ <AddImageForm /> }/>

          <Route
            path="*"
            element={
              <p className="RoutesList-not-found">
                Hmmm. I can't seem to find what you want.
              </p> }/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
