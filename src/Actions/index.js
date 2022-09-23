export const ADD_MOVIES = 'ADD_MOVIES'
export const ADD_TO_FAV = 'ADD_TO_FAV'
export const REMOVE_FROM_FAV = 'REMOVE_FROM_FAV'
export const SET_SHOW_FAV = 'SET_SHOW_FAV'

// action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
      }
}
export function addFav(movie){
    return {
        type: ADD_TO_FAV,
        movie
      }
}
export function removeFav(movie){
    return {
        type: REMOVE_FROM_FAV,
        movie
      }
}

export function showFav(val){
  return {
      type: SET_SHOW_FAV,
      val
    }
}