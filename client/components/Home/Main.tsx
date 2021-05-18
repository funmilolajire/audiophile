import { FC } from 'react';
import Hero from './Hero';
import Categories from './Categories';
import Products from './Products';
import BottomInfo from './BottomInfo';

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
