import styles from './App.module.scss';
import { Container } from './components/container/container';
import { Menu } from './components/menu/menu';
import { Favorite } from './components/favorite/favorite';
import { FavoriteContextProvider } from './context/FavoriteContext';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <FavoriteContextProvider> 
                <Container />
                <Favorite />
            </FavoriteContextProvider>
        </div>
    );
}

export default App;
