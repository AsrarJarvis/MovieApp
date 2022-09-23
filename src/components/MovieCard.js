import React, { Component } from 'react'
import { addFav, removeFav } from '../Actions';

export default class MovieCard extends Component {

  handleClickFav = ()=>{
    const {movie} = this.props;
    this.props.dispatch(addFav(movie))
  }

  handleClickUnFav = ()=>{
    const {movie} = this.props;
    this.props.dispatch(removeFav(movie))
  }

  render() {
    const { movie,isMovieFav } = this.props;
    return (
      <div className='movie-card'>
        <div className='left'>
            <img src={movie.Poster} alt="movie-poster"/>
        </div>
        <div className='right'>
            <div className='title'>{movie.Title}</div>
            <div className='plot'>{movie.Plot}</div>
            <div className='footer'>
                <div className='rating'>{movie.imdbRating}</div>
                {isMovieFav ? 
                  <button 
                    className='unfavourite-btn'
                    onClick={this.handleClickUnFav}
                  >
                        UnFavourite
                  </button>
                  :
                  <button className='favourite-btn'
                        onClick={this.handleClickFav}
                        >Favourite</button>
                }
                
            </div>
        </div>
      </div>
    )
  }
}
