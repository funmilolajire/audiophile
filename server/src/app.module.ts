import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ProductsModule, UsersModule,
    ConfigModule.forRoot({ isGlobal: true, cache: true}),
    TypeOrmModule.forRoot({
    type: 'postgres',
    autoLoadEntities: true,
    url: process.env.DATABASE_URL,
    synchronize: true,
    ssl: {
      rejectUnauthorized:false
    }
  }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { 
  constructor(private connection: Connection) { }
}