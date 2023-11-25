import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SSSConfigModule } from './modules/config/config.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [SSSConfigModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
