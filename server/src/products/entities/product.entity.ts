import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    slug: string;

    @Column()
    name: string;

    @Column()
    image: string;

    @Column()
    short: string;

    @Column()
    category: string;

    @Column()
    "category-thumbnails": string;

    @Column()
    price: Number;

    @Column()
    description: string;

    @Column()
    features: string;

    @Column()
    includes: string;

    @Column()
    gallery: string;

    @Column()
    others: string;
}