import React from 'react';
import '../App.css';

import MovieCard from './MovieCard';
import NavBar from './NavBar';
import {data} from '../data';
import {addMovies, showFav} from '../Actions/index'


class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    store.subscribe(()=>{
      console.log('Updated')
      this.forceUpdate();
    })
    // make api call
    // dispatch action
    store.dispatch(addMovies(data))
    console.log("State",this.props.store.getState())

  }

  isMovieFav = (movie) =>{
    const {favourite} = this.props.store.getState()
    const index = favourite.indexOf(movie)

    if(index !== -1){
      // found the movie
      return true;
    }
    return false;

  }

  onChangeTab = (val)=>{
    this.props.store.dispatch(showFav(val))
  }
  
  render(){
    const {list,favourite,showFavourite} = this.props.store.getState();
    console.log('Rendered', this.props.store.getState())

    const displayMovies = showFavourite ? favourite : list

  
    return (
      <div className="App">
        <NavBar/>
        <div className='main'>
          <div className='tabs'>
            <div className={`tab ${showFavourite? '':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
            <div className={`tab ${showFavourite? 'active-tabs': ''}`} onClick={()=>this.onChangeTab(true)}>Favourites</div>
          </div>
          <div className='list'>
            {displayMovies.map((movie,idx)=>(
              <MovieCard 
              movie={movie} 
              key={`movie-${idx}`}
              dispatch={this.props.store.dispatch}
              isMovieFav={this.isMovieFav(movie)}  
              />
            ))}
          </div>
          {displayMovies.length === 0 ? <h3 className='no-movies'>No Movies available in favourite section</h3> : null}
        </div>
      </div>
    );
  }
}

export default App;
