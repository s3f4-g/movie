import styles from './card.module.scss';
import classNames from 'classnames';

export interface CardProps {
    className?: string;
    movie: {
        id: number;
        poster_path?: string;
        title?: string;
        overview: string;
        vote_avarage: string;
        release_date: string;
    };
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-cards-and-templates
 */
export const Card = ({ className, movie }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className={styles.cardImg} />
            <div className={styles.detail}>
                <h1>{movie.title}</h1>
                <span className={styles.rating}>{movie.vote_avarage}</span>
                <p className={styles.desc}>{movie.overview.substring(0,200)}</p>
                <button className={styles.button}>+</button>
            </div>
        </div>
    );
};
