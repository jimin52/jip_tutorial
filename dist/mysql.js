"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = __importDefault(require("mysql2/promise"));
const config_1 = __importDefault(require("./config"));
exports.pool = promise_1.default.createPool({
    host: config_1.default.database.host,
    port: 3306,
    user: config_1.default.database.username,
    password: config_1.default.database.password,
    database: config_1.default.database.dbName,
});
