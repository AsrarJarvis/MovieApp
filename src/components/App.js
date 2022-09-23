import React from 'react';
import '../App.css';

import MovieCard from './MovieCard';
import NavBar from './NavBar';
import {data} from '../data';
import {addMovies} from '../Actions/index'


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


  
  render(){
    const {data} = this.props.store.getState()
    console.log('Rendered')
    return (
      <div className="App">
        <NavBar/>
        <div className='main'>
          <div className='tabs'>
            <div className='tab'>Movies</div>
            <div className='tab'>Favourites</div>
          </div>
          <div className='list'>
            {data.map((movie,idx)=>(
              <MovieCard movie={movie} key={`movie-${idx}`}/>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
