import axios from "axios";

export default {
  getPlants: function() {
    return axios.get("/api/plants");
  },
  searchPlants: function(cName) {
    return axios.post("/api/plants", {commonName: {$regex: cName, $options: 'i'}});
  },
  getPlant: function(id) {
    return axios.get("/api/plants/" + id);
  }
}