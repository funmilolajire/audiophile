import Main from '../../components/Checkout/Main';
import Meta from '../../components/Meta/Meta';

const checkout = () => {
    const metaOptions = {
        title: "Checkout",
        keywords: "music, audiophile, frontendmentor, funmilolajire, ecommerce, checkout",
        description: "Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week."
    }

    return (
        <>
            <Meta {...metaOptions} />
            <Main />
        </>
    )
}

export default checkout
