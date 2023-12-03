import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('product')
export class ProductEntity {
  @PrimaryColumn({ type: 'varchar' })
  remote_product_id: string;

  @PrimaryColumn({ type: 'int' })
  store_id: number;

  @Column({ type: 'varchar' })
  event_type: string;

  @Column({ type: 'varchar' })
  product_name: string;

  @Column({ type: 'int' })
  price: number;

  @Column({ type: 'int' })
  price_origin: number;

  @Column({ type: 'text' })
  product_image: string;

  @Column({ type: 'date', default: null, nullable: true })
  start_date: string;

  @Column({ type: 'date', default: null, nullable: true })
  end_date: string;

  @Column({ type: 'int', default: 0 })
  view_count: number;

  @Column({ type: 'varchar', default: 'y' })
  is_display: string;
}
