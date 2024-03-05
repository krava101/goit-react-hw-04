import axios from "axios";

axios.defaults.baseURL = 'https://api.unsplash.com/search/photos/';

const fetchImgs = async (search, page) => {
  const response = await axios.get(
        `?client_id=ip055ntbnmk8OGdt-RXbEy6_w3W-fXP1vuviiBfa75g&page=${page}&query=${search}`
      );    
  return response.data.results;
};

export default fetchImgs;