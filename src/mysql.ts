import mysql from 'mysql2/promise';
import config from './config';

export const pool = mysql.createPool({
  host: config.database.host,
  port: 3306,
  user: config.database.username,
  password: config.database.password,
  database: config.database.dbName,
});