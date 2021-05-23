interface Products {
    products: Product[]
}
interface Product {
    id?: number;
    slug: string;
    name: string;
    image: Image;
    category: string;
    categoryThumbnails: Image;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    gallery: {
        first: Image;
        second: Image;
        third: Image;
    }
    others: {
        slug: string;
        name: string;
        image: Image
    }[]
}

interface Image {
    mobile: string;
    tablet: string;
    desktop: string;
}