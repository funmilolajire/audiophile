import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product{
    @PrimaryGeneratedColumn("uuid")
    id: string;
    
    @Column()
    slug: string;

    @Column()
    name: string;

    @Column()
    new: boolean;

    @Column("jsonb")
    image: {
            mobile: string,
            tablet: string,
            desktop: string,
    };

    @Column()
    short: string;

    @Column()
    category: string;

    @Column("jsonb")
    categoryThumbnails: {
            mobile: string,
            tablet: string,
            desktop: string,
    };

    @Column("money")
    price: number;

    @Column()
    description: string;

    @Column()
    features: string;

    @Column("jsonb")
    includes: {
            quantity: number,
        item:string
    }[];

    @Column("jsonb")
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

    @Column("jsonb")
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