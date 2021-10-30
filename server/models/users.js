'use strict';
const {
	Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
	class users extends Model {
		/**`
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */

		static associate({ survey, Files }) {
			// define association here
			this.hasOne(survey, { foreignKey: 'user_id', as: 'survey' });
			this.hasOne(Files, { foreignKey: 'user_id', as: 'files' });

		}
		toJSON() {
			return { ...this.get(), id: undefined, password: undefined, createdAt: undefined, updatedAt: undefined }
		};

	};
	users.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		name: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		last_name: {
			type: DataTypes.STRING,
			defaultValue: "",
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			},
		},
	}, {
		sequelize,
		tableName: 'users',
		modelName: 'users',
	});
	return users;
};