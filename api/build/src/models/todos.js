"use strict";
// import { DataTypes } from 'sequelize';
//
// // Connect to sequelize and export the function model
//
// export default (sequelize: any) => {
//   // Defining model
//   sequelize.define('todo', {
//     id: {
//       type: DataTypes.UUID,
//       primaryKey: true,
//     },
//     todo: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//     },
//     status: {
//       type: DataTypes.STRING,
//       isIn: [['Available', 'Not-available']],
//     },
//   });
// };
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Todo extends sequelize_1.Model {
        id;
        title;
        status;
        static associate(models) {
            Todo.belongsTo(models.User);
        }
    }
    ;
    Todo.init({
        id: {
            type: DataTypes.UUID,
            defaultValue: sequelize_1.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.ENUM(['unfilled', 'complete']),
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Todo',
    });
    return Todo;
};
