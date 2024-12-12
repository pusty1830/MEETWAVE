const Sequlize = require("sequelize");

const sequlizeConfig = require("../config/db.config");

const user = sequlizeConfig.define(
  "users",
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequlize.INTEGER,
    },
    userName: {
      type: Sequlize.STRING(50),
      allowNull: false,
    },
    roll: {
      type: Sequlize.STRING(50),
      allowNull: false,
      default: "USER",
    },
    status: {
      type: Sequlize.STRING(30),
      allowNull: true,
      default: "CREATED",
    },
    email: {
      type: Sequlize.STRING(100),
      allowNull: false,
    },
    phoneNumber: {
      type: Sequlize.STRING(20),
      allowNull: false,
    },
    password: {
      type: Sequlize.STRING(100),
      allowNull: false,
    },
    coverImage: {
      allowNull: true,
      type: Sequlize.STRING(300),
    },
    profileImage: {
      allowNull: true,
      type: Sequlize.STRING(300),
    },
    token: {
      type: Sequlize.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "users",
    timestamps: true,
    indexes: [
      {
        fields: ["id"],
      },
      {
        fields: ["userName"],
      },
      {
        fields: ["status"],
      },
      {
        fields: ["email"],
      },
    ],
  }
);

module.exports = user;
