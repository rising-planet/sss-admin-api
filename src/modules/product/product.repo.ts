import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    protected readonly _productRepo: Repository<ProductEntity>,
  ) {}

  async findAll(page: number, size: number) {
    return this._productRepo.find({
      skip: (page - 1) * size,
      take: size,
    });
  }
}
