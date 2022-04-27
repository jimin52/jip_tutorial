"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.morganMiddleware = exports.logger = void 0;
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const { combine, timestamp, printf, colorize, } = winston_1.format;
const logDir = 'logs';
const levels = {
    error: 0,
    warn: 1,
    info: 2,
    http: 3,
    debug: 4,
};
const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    http: 'magenta',
    debug: 'blue',
};
(0, winston_1.addColors)(colors);
const level = () => {
    const env = process.env.NODE_ENV || 'development';
    const isDevelopment = env === 'development';
    return isDevelopment ? 'debug' : 'http';
};
const logFormat = combine(timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }), printf((info) => {
    if (info.stack) {
        return `${info.timestamp} ${info.level}: ${info.message} \n Error Stack: ${info.stack}`;
    }
    return `${info.timestamp} ${info.level}: ${info.message}`;
}));
const consoleOpts = {
    handleExceptions: true,
    level: process.env.NODE_ENV === 'production' ? 'error' : 'debug',
    format: combine(colorize({ all: true }), timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' })),
};
const logger = (0, winston_1.createLogger)({
    level: level(),
    levels,
    format: logFormat,
    transports: [
        new winston_daily_rotate_file_1.default({
            level: 'error',
            datePattern: 'YYYY-MM-DD',
            dirname: path_1.default.join(__dirname, logDir, '/error'),
            filename: '%DATE%.error.log',
            maxFiles: 30,
            zippedArchive: true,
        }),
        new winston_daily_rotate_file_1.default({
            level: 'debug',
            datePattern: 'YYYY-MM-DD',
            dirname: path_1.default.join(__dirname, logDir, '/all'),
            filename: '%DATE%.all.log',
            maxFiles: 7,
            zippedArchive: true,
        }),
        new winston_1.transports.Console(consoleOpts),
    ],
});
exports.logger = logger;
const morganMiddleware = (0, morgan_1.default)(':method :url :status :res[content-length] - :response-time ms', {
    stream: {
        // Use the http severity
        write: (message) => logger.http(message),
    },
});
exports.morganMiddleware = morganMiddleware;
