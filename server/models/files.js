'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class Files extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate({ users }) {
			this.belongsTo(users, { foreignKey: 'user_id', as: 'user' });
		}
	};
	Files.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: true,
		},
		path: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
	}, {
		sequelize,
		tableName: 'files',
		modelName: 'Files',
	});
	return Files;
};