import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [__dirname + '/database/models/**/*{.ts,.js}'],
  migrations: [__dirname + '/database/migration/**/*{.ts,.js}'],
  synchronize: false,
  extra: {
    parseInt8: true,
  },
  logging: false,
});
