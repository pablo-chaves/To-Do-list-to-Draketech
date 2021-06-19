"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router = require('express').Router();
const todo_js_1 = require("../controllers/todo.js");
const middlewareError_1 = __importDefault(require("../middleware/middlewareError"));
router.route('/');
router
    .route('/')
    .get(middlewareError_1.default(todo_js_1.getTodo))
    .post(middlewareError_1.default(todo_js_1.createTodo))
    .put(middlewareError_1.default(todo_js_1.updateTodo))
    .delete(middlewareError_1.default(todo_js_1.deleteTodo));
exports.default = router;
