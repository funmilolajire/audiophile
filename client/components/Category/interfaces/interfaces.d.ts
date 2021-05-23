interface Main extends Heading, CategoryProducts { }

interface Heading {
    category: string
}

interface CategoryProducts {
    categoryProducts: CategoryProduct[]
}

interface CategoryProduct {
    id?: string;
    categoryThumbnails: {
        mobile: string;
        tablet: string;
        desktop: string;
    };
    new: boolean;
    name: string;
    description: string;
    slug: string;
}