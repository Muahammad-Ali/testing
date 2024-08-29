import dotenv from 'dotenv';
import {Sequelize} from "sequelize";
import pg from 'pg';
dotenv.config();
export interface Config {
  dialectDefault: string;
  dbCharsetDefault: string;
  dbMaxPoolDefault: number;
  dbHost: string | undefined;
  dbPort: number | string;
  dbName: string | undefined;
  dbUser: string | undefined;
  dbPassword: string | undefined;
  dbCharset: string;
  dbMaxPool: number;
  migrationTableDefault: string;
  dbMigrationTableName: string | undefined;
  dbUrl:string
  connection:any
  // modelsPath: string
}
const dialectDefault = "pg";
const dbCharsetDefault = "utf8";
const dbMaxPoolDefault = 5

//local
const dbHost = process.env.NEXT_PUBLIC_DB_HOST;
const dbPort = process.env.NEXT_PUBLIC_DB_PORT || 5432;
const dbName = process.env.NEXT_PUBLIC_DB_NAME;
const dbUser = process.env.NEXT_PUBLIC_DB_USER;
const dbPassword = process.env.NEXT_PUBLIC_DB_PASSWORD;
const dbCharset = process.env.NEXT_PUBLIC_dbCharset || dbCharsetDefault;
const dbUrl = process.env.NEXT_PUBLIC_DB_URL || "postgres://postgres:1234@localhost:5432/maintenance"


const dbMaxPoolValue =10 //parseInt(process.env.DB_MAX_POOL || '', 10);
const dbMaxPool = Number.isInteger(dbMaxPoolValue) && dbMaxPoolValue > 0 ? dbMaxPoolValue : dbMaxPoolDefault;
const migrationTableDefault = "knex_migrations";
const dbMigrationTableName = process.env.db_mig_table_name;
  const sequelize = new Sequelize(dbUrl, {
    dialectModule: pg,
    // ssl:true,
    // dialectOptions: {
    //   ssl: {
    //     require: true,
    //     rejectUnauthorized: false
    //   }
    // },
    // pool: {
    //   max: 200, // Maximum number of connections in the pool
    //   min: 0,  // Minimum number of connections in the pool
    //   acquire: 30000, // Maximum time, in milliseconds, that a connection can be idle before being released
    //   idle: 10000 // Maximum time, in milliseconds, that a connection can be idle before being closed
    // }
});
const connection=sequelize;
const config: Config = {
  dialectDefault,
  dbCharsetDefault,
  dbMaxPoolDefault,
  dbHost,
  dbPort,
  dbName,
  dbUser,
  dbPassword,
  dbCharset,
  dbMaxPool,
  migrationTableDefault,
  dbMigrationTableName,
  dbUrl,
  connection,
  // modelsPath: "path/to/custom_models_directory"
};
export default config;
