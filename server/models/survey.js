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
		static associate({ users }) {
			// define association here
			this.belongsTo(users, { foreignKey: 'user_id', as: 'user' });
		}
	};
	survey.init({
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
		},
		user_id: {
			type: DataTypes.UUID,
			allowNull: true
		},
		gender: {
			type: DataTypes.STRING
		},
		english_level: {
			type: DataTypes.STRING
		},
		coding_learn: {
			type: DataTypes.STRING
		},
		education_level: {
			type: DataTypes.STRING
		},
		salary: {
			type: DataTypes.INTEGER
		},
		bonus: {
			type: DataTypes.INTEGER
		},
		currency: {
			type: DataTypes.STRING
		},
		title: {
			type: DataTypes.STRING
		},
		level: {
			type: DataTypes.STRING
		},
		total_xp: {
			type: DataTypes.FLOAT
		},
		at_company_xp: {
			type: DataTypes.FLOAT
		},
		company: {
			type: DataTypes.STRING
		},
		company_location: {
			type: DataTypes.STRING
		},
		company_bussines: {
			type: DataTypes.STRING
		},
		compensation: {
			type: DataTypes.STRING
		},
		email: {
			type: DataTypes.STRING,
			allowNull: true,
			validate: {
				isEmail: true
			},
		}
	}, {
		sequelize,
		modelName: 'survey',
	});
	return survey;
};