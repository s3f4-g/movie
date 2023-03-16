import styles from './App.module.scss';
import { Container } from './components/container/container';
import { Menu } from './components/menu/menu';
import { Favorite } from './components/favorite/favorite';
import { FavoriteContextProvider } from './context/FavoriteContext';
import { SearchContextProvider } from './context/SearchContext';


function App() {
    return (
        <div className={styles.App}>
        <SearchContextProvider>
            <Menu />
            <FavoriteContextProvider> 
                <Container />
                <Favorite />
            </FavoriteContextProvider>
        </SearchContextProvider>
        </div>
    );
}

export default App;
