"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const User_1 = require("../controllers/User");
const middlewareError_1 = __importDefault(require("../middleware/middlewareError"));
router.route('/:id')
    .get(middlewareError_1.default(User_1.getUser));
router.route('/register')
    .post(middlewareError_1.default(User_1.register));
router.route('/login')
    .post(middlewareError_1.default(User_1.login));
exports.default = router;
