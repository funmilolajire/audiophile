import { FC } from 'react';
import Hero from './Hero';
import Categories from '../Shared/Categories';
import Products from './Products';
import BottomInfo from '../Shared/BottomInfo';

const Main: FC = () => {
    return (
        <>
            <Hero />
            <Categories />
            <Products />
            <BottomInfo />
        </>
    )
}

export default Main
