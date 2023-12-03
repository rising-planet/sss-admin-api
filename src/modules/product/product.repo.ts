import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Like, Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    protected readonly _productRepo: Repository<ProductEntity>,
  ) {}

  async findAll(
    page: number,
    size: number,
    // gs 편의점 크롤링이 끝난 시점에서는 start, end date는 잠시 무시한다.
    start_date: string,
    end_date: string,
    event_type: string,
    is_display: string,
    keyword: string,
  ) {
    const where = {};
    if (event_type) where['event_type'] = event_type;
    if (is_display) where['is_display'] = is_display;
    // 아직 like 검색을 할지, 풀텍스트 인덱스를 걸지 결정하지 못함, 임시로 like 검색으로
    if (keyword) where['keyword'] = Like(`%${keyword}%`);
    console.log('where : ', where);
    return this._productRepo.find({
      skip: (page - 1) * size,
      take: size,
      where,
    });
  }
}
