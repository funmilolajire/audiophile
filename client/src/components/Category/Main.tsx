import { FC } from 'react';
import BottomInfo from '../Shared/BottomInfo';
import Categories from '../Shared/Categories';
import Heading from './Heading';
import Products from './Products';

const Main: FC<Main> = ({ category, categoryProducts }) => {
    return (
        <>
            <Heading category={category} />
            <Products categoryProducts={categoryProducts} />
            <Categories />
            <BottomInfo />
        </>
    )
}

export default Main
