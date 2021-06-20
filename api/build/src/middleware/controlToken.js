"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const controlToken = (req, res, next) => {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const head = bearerHeader.split(' ');
        req.token = head[1];
        next();
    }
    else {
        res.sendStatus(403);
    }
};
exports.default = controlToken;
