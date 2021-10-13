interface Products {
    products: Product[]
}
interface Product {
    id?: number;
    slug: string;
    name: string;
    short?: string;
    image: productImage;
    category: string;
    categoryThumbnails: productImage;
    new: boolean;
    price: number;
    description: string;
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
    gallery: {
        first: productImage;
        second: productImage;
        third: productImage;
    };
    others: {
        slug: string;
        name: string;
        image: productImage
    }[]
}

interface productImage {
    mobile: string;
    tablet: string;
    desktop: string;
}

interface DetailTop {
    id?: number;
    name: string;
    new: boolean;
    description: string;
    price: number;
    image: productImage;
}

interface Features {
    features: string;
    includes: {
        quantity: number;
        item: string;
    }[];
}

interface Gallery {
    gallery: {
        first: productImage;
        second: productImage;
        third: productImage;
    }
}

interface Others {
    others: OtherItem[]
}

interface OtherItem {
    slug: string;
    name: string;
    image: productImage
}