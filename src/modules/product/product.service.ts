import { Injectable } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductRepository } from './product.repo';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}
  async findProducts(
    page: number,
    size: number,
    start_date: string,
    end_date: string,
    event_type: string,
    is_display: string,
    keyword: string,
  ): Promise<ProductEntity[]> {
    return this.productRepository.findAll(
      page,
      size,
      start_date,
      end_date,
      event_type,
      is_display,
      keyword,
    );
  }
}
