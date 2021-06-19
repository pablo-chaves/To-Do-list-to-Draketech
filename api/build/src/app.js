"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const body_parser_1 = __importDefault(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const index_1 = __importDefault(require("./routes/index"));
const errorHandler_1 = __importDefault(require("./middleware/errorHandler"));
const cors_1 = __importDefault(require("cors"));
require('./db.js');
let server;
server = express_1.default();
// server.name = 'API';
// middlerwares
server.use(body_parser_1.default.urlencoded({ extended: true, limit: '50mb' }));
server.use(body_parser_1.default.json({ limit: '50mb' }));
server.use(cookie_parser_1.default());
server.use(morgan_1.default('dev'));
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
};
server.use(cors_1.default(corsOptions));
// rutas
server.use(index_1.default);
server.use(errorHandler_1.default);
// Error catching endware.
exports.default = server;
