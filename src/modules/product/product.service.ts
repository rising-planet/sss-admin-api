import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repo';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findProducts(page: number, size: number): Promise<ProductEntity[]> {
    return this.productRepository.findAll(page, size);
  }
}
