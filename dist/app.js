"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = require("./utils/logger");
// ==== 새로 추가
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = __importDefault(require("./swagger/swagger"));
// =========
const app = (0, express_1.default)();
app.use(logger_1.morganMiddleware);
app.get("/welcome", (req, res) => {
    res.send("welcome!");
});
// Swagger 연결 === 새로 추가
const specs = (0, swagger_jsdoc_1.default)(swagger_1.default);
app.use("/swagger", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs, { explorer: true }));
// ========
// dev route
app.use("/api", routes_1.default);
exports.default = app;
