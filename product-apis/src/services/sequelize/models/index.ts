import fs from "fs";
import path from "path";
import { Sequelize, DataTypes, Model } from "sequelize";
import process from "process";

const basename = path.basename(__filename);
const config = global.AppConfigs.postgres;

interface DB {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  [key: string]: typeof Model | any;
}

const db: DB = {} as DB;

let sequelize: Sequelize;
sequelize = new Sequelize(config.database, config.username, config.password, config);

// Read model files and import them dynamically
fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf(".") !== 0 && file !== basename;
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file)).default(sequelize);
    db[model.name] = model;
  });

// Set up associations if they exist
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
