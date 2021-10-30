'use strict';
module.exports = {
	up: async (queryInterface, DataTypes) => {
		await queryInterface.createTable('users', {
			id: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
				primaryKey: true
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
				createdAt: {
					allowNull: false,
					type: DataTypes.DATE
				},
				updatedAt: {
					allowNull: false,
					type: DataTypes.DATE
				}
			},
		});
	},
	down: async (queryInterface, DataTypes) => {
		await queryInterface.dropTable('users');
	}
};