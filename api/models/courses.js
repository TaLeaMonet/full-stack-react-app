'use strict';	
	const Sequelize = require('sequelize');
	
	module.exports = (sequelize) => {
	class Course extends Sequelize.Model {}
	Course.init({
	title: {
	type: Sequelize.STRING,
	allowNull: false,
	validate: {
        notEmpty: {
          msg: 'Please provide a value for title',
        }
      },
	},
	description: {
	type: Sequelize.TEXT,
	allowNull: false,
	validate: {
        notEmpty: {
          msg: 'Please provide a value for description',
        }
      },
	},
	estimatedTime: Sequelize.STRING,
	materialsNeeded: Sequelize.STRING,
	}, { sequelize });
	
	Course.associate = (models) => {
		Course.belongsTo(models.User, {
			foreignKey: "userId"
		});
	};
	
	return Course;
	};
