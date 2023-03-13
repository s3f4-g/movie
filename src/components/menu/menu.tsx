import styles from './menu.module.scss';
import classNames from 'classnames';

export interface MenuProps {
    className?: string;
}

const sortBy: string[] = ['Popularity', 'Most Voted', 'Release Date'];
const genres: string[] = ['Action', 'Comedy', 'Horror'];

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/configuration-for-menus-and-templates
 */
export const Menu = ({ className }: MenuProps) => {
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
                    <li className={styles.listItem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
            <span className={styles.title}>
                Genre
                <hr className={styles.hr} />
            </span>
            <ul className={styles.list}>
                {genres.map((item) => (
                    <li className={styles.listItem} key={item}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};
