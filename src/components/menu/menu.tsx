import styles from './menu.module.scss';
import classNames from 'classnames';
import { useContext } from 'react'
import {SearchContext} from '../../context/SearchContext'


export interface MenuProps {
    className?: string;
}

const sortBy: { q: string; text: string} [] = [
    {q: 'popularity.desc', text:'Popularity'},
    {q: 'vote_count.desc', text:'Most Voted'},
    {q: 'release_date.desc', text:'Release Date'},
];



const genres: { id: string; text: string} [] = [
    {id: '28', text:'Action'},
    {id: '12', text:'Adventure'},
    {id: '35', text:'Comedy'},
    {id: '18', text:'Drame'},
    {id: '27', text:'Horror'},
    {id: '10749', text:'Romance'},
    {id: '53', text:'Thriller'},
    {id: '16', text:'Animation'},
    
];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
    const { dispatch, state } = useContext(SearchContext)
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img
                    src={
                        'https://media.istockphoto.com/id/1277789715/tr/foto%C4%9Fraf/film-clapperboard-ve-sinema-biletleri-ev-film-gecesi-parti-davetiyesi.jpg?s=2048x2048&w=is&k=20&c=OA8DELbE1f7-Bs1pqAfmqCQzLX9yCdUsxXEd6mw21cI='
                    }
                    className={styles.logoImg}
                />
                <span className={styles.logoText}>SefaMovie</span>
            </div>
            <span className={styles.title}>Sort by</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map((item) => (
                    <li className={styles.listItem} key={item.q} onClick={()=>dispatch({type:"SORT_BY",payload:item.q})}>
                        {item.text}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>
                Genre
                <hr className={styles.hr} />
            </span>
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li className={styles.listItem} key={item.id} onClick={()=>dispatch({type:"ADD_GENRE",payload:item.id})}>
                        {item.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};
