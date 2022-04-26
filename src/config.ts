import dotenv from 'dotenv';

dotenv.config();

const config = {
  database: {
    host: process.env.MODE === 'local' ? 'localhost' : 'database',
    port: 3306,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    dbName: process.env.MYSQL_DATABASE,
  },
};

export default config;