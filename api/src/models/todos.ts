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
