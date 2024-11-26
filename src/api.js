import axios from 'axios';

const apiUrl = 'https://wft-geo-db.p.rapidapi.com/v1/geo/places';
const apiKey = '44a135b5a0msh17acfd1c7d8a953p1e5e6cjsnb2c8eb72cb0b';
const apiHost = 'wft-geo-db.p.rapidapi.com';

const api = async (namePrefix) => {
  try {
    const options = {
      method: 'GET',
      url: apiUrl,
      params: { namePrefix },
      headers: {
        'x-rapidapi-key': apiKey,
        'x-rapidapi-host': apiHost
      }
    };

    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("error",error);
    alert(error);
    return null;
  }
};

export default api;