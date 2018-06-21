import axios from "axios";

export default {
  getPlants: function() {
    return axios.get("/api/plants");
  }
}