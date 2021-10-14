import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {Product} from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) { }
  
  async create(createProductDto: CreateProductDto) {
    const newProduct = await this.productsRepository.save(createProductDto)
    return {
      status:"success",
      data: newProduct,
    message:"product created successfully"};
  }

  async findAll() {
    return await this.productsRepository.find();
  }

  async findOne(id: string) {
    let found = await this.productsRepository.findOne({slug:id}) || await this.productsRepository.findOne(id)
    if (found) {
      return found 
    } else {
      throw new NotFoundException('Product not found');
    }
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    let found = await this.productsRepository.findOne({ slug: id }) || await this.productsRepository.findOne(id)
    if (found) {
      return {
        status: "success",
        data: await this.productsRepository.update({ id: found.id }, updateProductDto),
        message: "product updated successfully"
      }
    } else {
      throw new NotFoundException('Product not found');
    }
  }

  async remove(id: string) {
    let found = await this.productsRepository.findOne({ slug: id }) || await this.productsRepository.findOne(id)
    if (found) {
      return {
        status: "success",
        data: await this.productsRepository.delete({ id: found.id }),
        message: "product deleted successfully"
      }
    } else {
      throw new NotFoundException('Product not found');
    }
  }
}
