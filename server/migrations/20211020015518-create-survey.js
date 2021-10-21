'use strict';
module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('surveys', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      uuid: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      gender: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      english_level: {
        type: DataTypes.STRING(64)
      },
      coding_learn: {
        type: DataTypes.STRING
      },
      education_level: {
        type: DataTypes.STRING
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
        type: DataTypes.STRING
      },
      compensation: {
        type: DataTypes.STRING(1024)
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  down: async (queryInterface, DataTypes) => {
    await queryInterface.dropTable('urveys');
  }
};