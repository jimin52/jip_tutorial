"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const mysql_1 = require("../mysql");
const search = (page, limit) => __awaiter(void 0, void 0, void 0, function* () {
    const sql = `
  SELECT * FROM book 
  LEFT JOIN book_info 
  ON book.infoId = book_info.id
  LIMIT ?
  OFFSET ?;
  `;
    const data = yield mysql_1.pool.query(sql, [limit, limit * page]);
    const book_list = JSON.parse(JSON.stringify(data[0]));
    return { book_list };
});
exports.search = search;
