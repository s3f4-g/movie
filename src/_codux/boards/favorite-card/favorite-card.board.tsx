import { createBoard } from '@wixc3/react-board';
import { FavoriteCard } from '../../../components/favorite-card/favorite-card';

export default createBoard({
    name: 'FavoriteCard',
    Board: () => (
        <FavoriteCard
            movie={{
                id: 123,
                overview:
                    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
                release_date: '2001',
                vote_avarage: '7.8',
                poster_path:
                    'https://posters.movieposterdb.com/15_11/2015/2488496/l_2488496_0dedc25d.jpg',
                title: 'Star Wars ',
            }}
        />
    ),
    environmentProps: {
        windowHeight: 1222,
    },
});
