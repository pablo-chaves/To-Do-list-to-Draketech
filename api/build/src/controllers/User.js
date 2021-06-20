"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.register = exports.login = void 0;
const db_js_1 = __importDefault(require("../db.js"));
const uuid_1 = require("uuid");
const jwt = __importStar(require("jsonwebtoken"));
async function login(req, res) {
    const { TOKEN } = process.env;
    const email = req.body.email;
    const password = (req.body.password + '');
    const userDb = await db_js_1.default.User.findOne({ where: { email } });
    const user = userDb.dataValues;
    const id = user.id;
    if (user.email === email && user.password === password) {
        const token = jwt.sign({ id }, TOKEN);
        res.json({ ...user, token });
    }
    else {
        res.sendStatus(403);
    }
}
exports.login = login;
async function register(req, res) {
    const id = uuid_1.v4();
    const user = { ...req.body, id };
    await db_js_1.default.User.create(user);
    res.json(user);
}
exports.register = register;
async function getUser(req, res) {
    const { id } = req.params;
    res.json(await db_js_1.default.User.findByPk(id));
}
exports.getUser = getUser;
