import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getHello(
    @Query('page', ParseIntPipe) page: number,
    @Query('size', ParseIntPipe) size: number,
    @Query('start_date') start_date?: string,
    @Query('end_date') end_date?: string,
    // 1%2B1 = 1+1, url 변수에 특수문자를 포함해서 보내는 경우 프론트에서 인코딩해서 보내줘야함
    @Query('event_type') event_type?: string,
    @Query('is_display') is_display?: string,
    @Query('keyword') keyword?: string,
  ): Promise<ProductEntity[]> {
    return this.productService.findProducts(
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
