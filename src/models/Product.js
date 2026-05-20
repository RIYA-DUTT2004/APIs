import { DataTypes } from "sequelize";

import sequelize from "../config/postgres.js";

const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }
);

export default Product;