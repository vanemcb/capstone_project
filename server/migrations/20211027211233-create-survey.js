'use strict';

module.exports = {
	up: async (queryInterface, DataTypes) => {
		await queryInterface.createTable('surveys', {
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
		await queryInterface.dropTable('surveys');
	}
};