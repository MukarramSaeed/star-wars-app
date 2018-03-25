import React,{Component} from 'react';
import Movie from './Movie/Movie';

class Movies extends Component{
    state={
        movies:null
    }
    componentDidMount(){
        fetch('https://swapi.co/api/films/?format=json')
        .then(resp=>resp.json())
        .then(data=>{
            console.log(data.results);
            this.setState({
                movies:data.results,
            })
        })
    }
    render(){
        let movies = <h3>Loading...</h3>
        if(this.state.movies){
            movies = this.state.movies.map(resp=>{
                return <Movie key = {resp.title} name = {resp.title} desc = {resp.opening_crawl} director = {resp.director} producer={resp.producer} release = {resp.release_date}/>
            });
        }
        return (
            <div>
                {movies}
            </div>
        );
    }
}

export default Movies;