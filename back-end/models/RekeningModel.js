import { Sequelize } from "sequelize";
import db from "../config/database.js";

const { DataTypes } = Sequelize;

const Rekening = db.define("Rekening", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  notes: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

export default Rekening;