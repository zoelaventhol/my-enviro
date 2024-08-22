export default {
  // get all indicator details and store them in allIndicators state
  async getAllIndicators() {
    try {
      let response = await fetch(`/api/indicator-details`);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  },

  // get details for one indicator (by id) and set them as state for featIndicator
  async getFeatIndicator(id) {
    try {
      let response = await fetch(`/api/indicator-details/${id}`);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  },

  // get local enviro_data based on ZIP code entry on HomeView, set as state for envData
  async getLocalData(zipInput) {
    try {
      let response = await fetch(`/api/enviro-data/${zipInput}`);
      if (response.ok) {
        let data = await response.json();
        return data;
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.log(`Network error: ${error.message}`);
    }
  },
};
