import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  findProducts(): string {
    return 'Hello Products!';
  }
}
