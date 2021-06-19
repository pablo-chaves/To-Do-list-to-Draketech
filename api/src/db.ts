require('dotenv').config();
const Sequelize = require('sequelize');
import * as fs from 'fs';
import * as path from 'path';

const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME,
} = process.env;

let sequelize: any;
sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false,
});
const basename = path.basename(__filename);
const db: any = {};
fs
  .readdirSync(path.join(__dirname, '/models'))
  .filter((file: string) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach((file: any) => {
    const model = require(path.join(__dirname, '/models', file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
