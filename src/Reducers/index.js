import { ADD_MOVIES, ADD_TO_FAV, REMOVE_FROM_FAV, SET_SHOW_FAV } from "../Actions";


const initialState = {
    list: [],
    favourite: [],
    showFavourite: false
}
export default function movies(state = initialState,action){
    switch(action.type){
        case ADD_MOVIES:
            return {
                ...state,
                list: action.movies
            }
        case ADD_TO_FAV:
            return {
                ...state,
                favourite: [ action.movie, ...state.favourite]
            }
        case REMOVE_FROM_FAV:
            const filteredList = state.favourite.filter(
                movie => movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourite: filteredList
            }
            case SET_SHOW_FAV:
                return {
                    ...state,
                    showFavourite: action.val
                }
        
        default:
            return state;
    }   
}