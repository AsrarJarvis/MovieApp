import { combineReducers } from "redux";
import { ADD_MOVIES, ADD_TO_FAV, REMOVE_FROM_FAV, SET_SHOW_FAV } from "../Actions";


const initialMoviesState = {
    list: [],
    favourite: [],
    showFavourite: false
}
export function movies(state = initialMoviesState,action){
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

const initialSearchState = {
    result: {}
}

export function search(state=initialSearchState,action){
    return {
        state
    }
}

// const initialRootState = {
//     movies: initialMoviesState,
//     search: initialSearchState
// }

// export default function rootReducer(state=initialRootState,action){
//     return {
//         movies: movies(state.movies,action),
//         search: search(state.search,action)
//     }
// }

// this is same as custom rootReducer
export default combineReducers({
    movies,
    search
})