"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = function (err, req, res, next) {
    console.log('err.message: ', err);
    res.status(500).send('an error occurred on the server..');
};
exports.default = errorHandler;
