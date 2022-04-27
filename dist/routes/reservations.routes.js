"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.path = void 0;
const express_1 = require("express");
const reservations_controller_1 = require("../reservations/reservations.controller");
exports.path = '/reservations';
exports.router = (0, express_1.Router)();
console.log("res router");
exports.router.get('/search', reservations_controller_1.search);
