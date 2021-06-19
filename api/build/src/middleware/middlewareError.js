"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (handlerRoute) => {
    return async (req, res, next) => {
        try {
            await handlerRoute(req, res, next);
        }
        catch (error) {
            next(error);
        }
    };
};
exports.default = errorMiddleware;
