import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";
import Categories from "./CategoryModel.js";

const { DataTypes } = Sequelize;

const Rekening = db.define(
  "rekening",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    is_scheduled: {
      type: DataTypes.ENUM("true", "false"),
      allowNull: false,
      defaultValue: "false",
      validate: {
      },
    },
  },
  {
    freezeTableName: true,
  }
);

Users.hasMany(Rekening);
Rekening.belongsTo(Users);
Categories.hasMany(Rekening);
Rekening.belongsTo(Categories);

export default Rekening;
