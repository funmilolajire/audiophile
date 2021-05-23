import { FC } from "react"
import Meta from '../components/Layout/Meta';
import Main from '../components/Home/Main';
import _ from 'lodash';

const home: FC = () => {
    const metaOptions = {
        title: _.upperFirst("home"),
        keywords: "music, audiophile, frontendmentor, funmilolajire, ecommerce",
        description: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
    }

    return (
        <>
            <Meta {...metaOptions} />
            <Main />
        </>
    )
}

export default home