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
      plantData.commonName = { $regex: commonName, $options: "i" };
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
  },

  //checks login credentials against database.
  loginSubmit: function(loginData) {
    return axios.post("/api/auth/login", loginData);
  },
  //registers a new user into the database.
  registerSubmit: function(registerData) {
    return axios.post("/api/auth/register", registerData);
  },
  //registers a users contact message into the database.
  contactSubmit: function(contactData) {
    return axios.post("/api/contact", contactData);
  }
};
