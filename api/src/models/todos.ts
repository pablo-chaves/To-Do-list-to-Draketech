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

import {
  Model, UUIDV4
} from 'sequelize';

interface TodoAttributes {
  id: string;
  title: string;
  status: [string, string];
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Todo extends Model<TodoAttributes>
    implements TodoAttributes{
    id!: string;
    title!: string;
    status!: [string, string];

    static associate(models: any) {
      Todo.belongsTo(models.User)
    }
  };
  Todo.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
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
