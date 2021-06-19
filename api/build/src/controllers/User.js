"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.register = exports.login = void 0;
const db_js_1 = __importDefault(require("../db.js"));
async function login(req, res) {
    res.send('soy un login');
}
exports.login = login;
async function register(req, res) {
    await db_js_1.default.User.create(req.body);
    res.send(req.body);
}
exports.register = register;
async function logout(req, res) {
    await db_js_1.default.User.create(req.body);
    res.send(req.body);
}
exports.logout = logout;
