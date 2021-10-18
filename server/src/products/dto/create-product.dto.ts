import { ApiProperty } from "@nestjs/swagger";

export class CreateProductDto {
    id: string;
    slug: string;
    name: string;
    new: boolean;
    image: {
            mobile: string,
            tablet: string,
            desktop: string,
    };
    short: string;
    category: string;
    categoryThumbnails: {
            mobile: string,
            tablet: string,
            desktop: string,
    };
    price: number;
    description: string;
    features: string;
    includes: {
            quantity: number,
        item:string
    }[];
    gallery: {
            first: {
            mobile: string,
            tablet: string,
            desktop: string,
            },
            second: {
                mobile: string,
                tablet: string,
                desktop: string,
            },
            third: {
                mobile: string,
                tablet: string,
                desktop: string,
            }
    };
    @ApiProperty({ isArray: true, default: [], type: Array<{
            slug: string,
            name: string,
            image: {
                mobile: string,
                tablet: string,
                desktop: string,
        }}>() })
    others: {
            slug: string,
            name: string,
            image: {
                mobile: string,
                tablet: string,
                desktop: string,
        }
    }[];
}
