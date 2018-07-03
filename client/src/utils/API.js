import axios from "axios";

export default {
  getPlants: function() {
    return axios.get("/api/plants");
  },
  searchPlants: function(param) {
    const commonName = param.commonName || null;
    const soil = param.soil || null;
    const sun = param.sun || null;
    const water = param.water || null;
    const habitat = param.habitat || null;
    let plantData = {};

    if (param.commonName) {
      plantData.commonName = {$regex: commonName, $options: 'i'};
    }

    if (param.soil) {
      plantData.soil = soil;
    }

    if (param.sun) {
      plantData.sun = sun;
    }

    if (param.water) {
      plantData.water = water;
    }

    if (param.habitat) {
      plantData.habitat = habitat;
    }
    return axios.post("/api/plants", plantData);
  },
  getPlant: function(id) {
    return axios.get("/api/plants/" + id);
  }
}