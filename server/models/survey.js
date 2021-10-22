'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class survey extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
    toJSON() {
        return { ...this.get(), id: undefined }
    };
  };
  survey.init({
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    gender: {
      type: DataTypes.STRING(64),
      allowNull: false,
    },
    english_level: {
      type: DataTypes.STRING(64),
    },
    coding_learn: {
      type: DataTypes.STRING,
    },
    education_level: {
      type: DataTypes.STRING,
    },
    salary: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bonus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    currency: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    total_xp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    at_company_xp: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    company: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    company_bussines: {
      type: DataTypes.STRING,
    },
    compensation: DataTypes.STRING(1024)
  }, {
    sequelize,
    tableName: 'surveys',
    modelName: 'Survey',
  });
  return survey;
};