const Sequlize = require("sequelize");
const SequlizeConfig = require("../config/db.config");
const user = require("./user.model");

const meeting = SequlizeConfig.define(
  "meeting",
  {
    id: {
      allowNull: false,
      type: Sequlize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    meetingId: {
      type: Sequlize.STRING(100),
      allowNull: false,
    },
    userId: {
      type: Sequlize.INTEGER,
      allowNull: true,
    },
    url: {
      type: Sequlize.STRING(300),
      allowNull: true,
    },
    scheduleTime: {
      allowNull: false,
      type: Sequlize.DATE,
      defaultValue: Sequlize.NOW,
    },
    duration: {
      type: Sequlize.INTEGER,
      allowNull: false,
    },
    status: {
      allowNull: false,
      type: Sequlize.STRING(10),
    },
  },
  {
    timestamps: true,
    tblName: "meeting",
    indexes: [
      {
        fields: ["id"],
      },
      {
        fields: ["meetingId"],
      },
      {
        fields: ["userId"],
      },
      {
        fields: ["status"],
      },
    ],
  }
);

meeting.belongsTo(user, { foreignKey: "userId", constraints: false });

module.exports = meeting;
