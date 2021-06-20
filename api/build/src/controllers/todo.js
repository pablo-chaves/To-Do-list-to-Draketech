"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.getTodo = exports.createTodo = void 0;
const db_js_1 = __importDefault(require("../db.js"));
const verify_1 = __importDefault(require("../middleware/verify"));
async function createTodo(req, res) {
    await db_js_1.default.Todo.create(req.body);
    res.json({ message: 'To-Do created successfully' });
}
exports.createTodo = createTodo;
async function getTodo(req, res) {
    const verifyToken = verify_1.default(req.token);
    if (verifyToken.id) {
        const id = verifyToken.id;
        let search = await db_js_1.default.Todo.findAll({ where: { UserId: id } });
        res.json(search);
    }
    else {
        res.sendStatus(403);
    }
}
exports.getTodo = getTodo;
async function updateTodo(req, res) {
    const verifyToken = verify_1.default(req.token);
    if (verifyToken.id) {
        const { id } = req.params;
        const upDateTodo = {
            title: req.body.title,
            status: req.body.status,
        };
        const todo = await db_js_1.default.Todo.findByPk(id);
        await todo.update(upDateTodo);
        await todo.save();
        return res.json({ message: `updated: ${todo.dataValues.title}` });
    }
    else {
        res.sendStatus(403);
    }
}
exports.updateTodo = updateTodo;
async function deleteTodo(req, res) {
    const verifyToken = verify_1.default(req.token);
    if (verifyToken.id) {
        const { id } = req.params;
        const todo = await db_js_1.default.Todo.findByPk(id);
        await todo.destroy();
        return res.json({ message: `deleted: ${todo.dataValues.title}` });
    }
    else {
        res.sendStatus(403);
    }
}
exports.deleteTodo = deleteTodo;
