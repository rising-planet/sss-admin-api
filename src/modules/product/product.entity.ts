import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryColumn()
  remote_product_id: string;

  @PrimaryColumn()
  store_id: number;

  @Column()
  event_type: string;

  @Column()
  product_name: string;

  @Column()
  price: number;

  @Column()
  price_origin: number;

  @Column()
  product_image: string;

  @Column({ default: 0 })
  view_count: number = 0;
}
