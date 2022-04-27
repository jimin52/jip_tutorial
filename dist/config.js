"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const config = {
    database: {
        host: process.env.MODE === 'local' ? 'localhost' : 'database',
        port: 3306,
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        dbName: process.env.MYSQL_DATABASE,
    },
};
exports.default = config;
