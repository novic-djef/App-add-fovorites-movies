import axios from "axios";

export const GET_MOVIES = 'GET_MOVIES';
export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'd412348ab20276723ef07e448f614ba3';
const PARAMS = 'page=2';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;

console.log('url: ', `${API_URL}?api_key=${API_KEY}&${PARAMS}`)

export const getMovies = () => {
    try {
        return async dispatch => {
            const res = await axios.get(`${BASE_URL}`);
            if (res.data) {
                dispatch({
                    type: GET_MOVIES,
                    payload: res.data.results
                });
            } else {
                console.warn('Impossible de recuperer')
            }
        }
    } catch (error) {
        console.log('error: ', error);
    }
}

export const addFavorite = movie => dispatch => {
    dispatch({
      type: ADD_FAVORITE_ITEM,
      payload: movie,
    });
  };
  export const removeFavorite = movie => dispatch => {
    dispatch({
      type: REMOVE_FAVORITE_ITEM,
      payload: movie,
    });
  };

//   export const GET_SERIES = 'GET_SERIES';

// const API_URL = 'https://moviesdatabase.p.rapidapi.com/titles/series/{seriesId}';
// const API_KEY = '26d0b4d10emsh624ca010309aa63p16481djsn5e076ca3ccfb';

// const options = {
//   method: 'GET',
//   url: API_URL,
//   headers: {
//     'X-RapidAPI-Key': API_KEY,
//     'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
//   }
// };

// export const getSeries = (seriesId) => {
//   return async (dispatch) => {
//     try {
//       const response = await axios.request(options);
//       dispatch({
//         type: GET_SERIES,
//         payload: response.data.results, // Assurez-vous que la structure de vos données correspond à ce que vous attendez.
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };
// };











