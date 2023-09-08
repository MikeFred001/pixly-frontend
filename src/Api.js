import axios from "axios";

const BASE_API_URL = "http://localhost:5002/api";

class PixlyApi {

  /** Gets snack data from the snackorbooze api. */
  static async fetchImages() {
    const result = await axios.get(`${BASE_API_URL}/images`);
    return result.data.images;
  }

  /** Adds a menu item to the snackorbooze api
   * Takes:
   *  - formData { id, name, description, recipe, serve }
   *  - menuType "drinks" or "snacks"
   */
  // static async addImage(file){
  //   console.log("FORM DATA CLASS METHOD", file);

  //   const result = await axios({
  //     method: "post",
  //     url: `${BASE_API_URL}/images`,
  //     data: file
  //   });

  //   return result.data;
  // }

}

export default PixlyApi;