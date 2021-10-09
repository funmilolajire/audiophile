import Categories from '../Shared/Categories';
import BottomInfo from '../Shared/BottomInfo';
import DetailTop from './DetailTop';
import Features from './Features';
import Gallery from './Gallery';
import Others from './Others';
import { FC } from 'react';
const Main: FC<Product> = (product) => {
    const { name, new: is_new, description, price, image } = product
    const { features, includes } = product
    const { gallery } = product
    const { others } = product
    return (
        <>
            <DetailTop name={name} new={is_new} description={description} price={price} image={image} />
            <Features features={features} includes={includes} />
            <Gallery gallery={gallery} />
            <Others others={others} />
            <Categories />
            <BottomInfo />
        </>
    )
}

export default Main
