import styles from './cards.module.scss';
import classNames from 'classnames';
import { Card } from '../card/card';
import { useState,useEffect, useContext } from 'react';
import { SearchContext } from '../../context/SearchContext';
 
export interface Movie {
        id: number;
        poster_path?: string;
        title?: string;
        overview: string;
        vote_average: string;
        release_date: string;
}



export interface CardsProps {
    className?: string;
}




/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cardss-and-templates
 */
export const Cards = ({ className }: CardsProps) => {
    const [movies, setMovies] = useState<Movie[]>([])
    const { state } = useContext(SearchContext)
    const {sortBy, genre, query } = state;


    useEffect(()=>{
        fetch(
            query !== ''
                ? `https://api.themoviedb.org/3/search/movie/?api_key=3db8bf7718cc151710a63372f6ac871e&query=${query}`
                : `https://api.themoviedb.org/3/discover/movie/?api_key=3db8bf7718cc151710a63372f6ac871e&sort_by=${sortBy}&with_genres=${genre}`)
        
            .then(response=>response.json())
            .then((data) => setMovies(data.results))
            .catch((err) => console.log(err))
    },[sortBy, genre, query])

    
    return (
        <div className={classNames(styles.root, className)}>
            {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />

            ))}
        </div>
    );
};
