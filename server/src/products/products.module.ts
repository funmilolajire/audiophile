import { HttpModule, Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  imports: [HttpModule,TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
