import styles from './App.module.scss';
import { Container } from './components/container/container';
import { Menu } from './components/menu/menu';
import { Favorite } from './components/favorite/favorite';

function App() {
    return (
        <div className={styles.App}>
            <Menu />
            <Container />
            <Favorite />
        </div>
    );
}

export default App;
