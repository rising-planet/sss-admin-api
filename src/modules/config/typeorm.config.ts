import { ConfigService } from '@nestjs/config';
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import { join } from 'path';

const prefix = 'LOCAL';

class TypeOrmConfig {
  static getConfig(configService: ConfigService): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: configService.get(`${prefix}_CRAWL_DB_HOST`),
      port: configService.get<number>(`${prefix}_CRAWL_DB_PORT`),
      username: configService.get(`${prefix}_CRAWL_DB_USERNAME`),
      password: configService.get(`${prefix}_CRAWL_DB_PASSWORD`),
      database: configService.get(`${prefix}_CRAWL_DB_DATABASE`),
      entities: [join(__dirname, '../**/*.entity.js')],
      synchronize: true,
      logging: false,
      autoLoadEntities: false,
      timezone: 'Z',
    };
  }
}

export const typeOrmConfigAsync: TypeOrmModuleAsyncOptions = {
  name: process.env.CRAWL_DB_CONNECTION_NAME,
  useFactory: async (configService: ConfigService) =>
    TypeOrmConfig.getConfig(configService),
  inject: [ConfigService],
};
