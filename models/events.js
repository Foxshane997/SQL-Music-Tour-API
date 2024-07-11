"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class events extends Model {
    static associate({ Stage, StageEvent }) {
      Event.belongsToMany(Stage, {
        foreignKey: "event_id",
        as: "stages",
        through: StageEvent,
      });
    }

    static associate(models) {
      // define association here
    }
  }
  events.init(
    {
      event_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      start_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "events",
      tableName: "events",
      timestamps: false,
    }
  );
  return events;
};
