import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "testdb",
  "postgres",
  "riya",
  {
    host: "localhost",
    dialect: "postgres",
  }
);

export default sequelize;