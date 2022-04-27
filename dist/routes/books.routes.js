"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.path = void 0;
const express_1 = require("express");
const books_controller_1 = require("../books/books.controller");
exports.path = '/books';
exports.router = (0, express_1.Router)();
console.log("books router");
exports.router.get('/search', books_controller_1.search);
