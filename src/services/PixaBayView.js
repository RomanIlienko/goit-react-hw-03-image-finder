import axios from "axios";

const API_KEY = '23479864-16575353206961163feee44f8';
const BASE_URL = 'https://pixabay.com/api/';

const fetchPagesList = ( searchQuery = '', currentPage = 1, perPage = 12 ) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchQuery}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`,
    )
    .then(response => response.data.hits)
  
}

export default fetchPagesList;
