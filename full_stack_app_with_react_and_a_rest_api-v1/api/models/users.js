'use strict';	
	const Sequelize = require('sequelize');
	var bcrypt = require('bcryptjs');
	var salt = bcrypt.genSaltSync(10);
	var hash = bcrypt.hashSync("B4c0/\/", salt);
	
	module.exports = (sequelize) => {
	class User extends Sequelize.Model {}
	User.init({
	id: {
	type: Sequelize.INTEGER,
	primaryKey: true,
	autoIncrement: true,
	},
	firstName: {
	type: Sequelize.STRING,
	allowNull: false,
	validate: {
        notEmpty: {
          msg: 'First name is required'
        }
      },
	},
	lastName: {
	type: Sequelize.STRING,
	allowNull: false,
	validate: {
        notEmpty: {
          msg: 'Last name is required'
        }
      },
	},
	emailAddress: {
	type: Sequelize.STRING,
	allowNull: false,
	unique: {
		msg: 'The email you entered already exists'
	},
	validate: {
        notEmpty: {
          msg: 'An email is required'
        },
		isEmail: {
			msg: 'Please provide a valid value for email address'
		}
      }
	},
	password: {
	type: Sequelize.STRING,
	allowNull: false,
	set(val) {
				const hashedPassword = bcrypt.hashSync(val, 10);
				this.setDataValue('password', hashedPassword);
		},
	validate: {
		notNull: {
			msg: 'Please provide a value for password'
		}
	}		
  },
 }, { sequelize });
	
	User.associate = (models) => {
		User.hasMany(models.Course, {
			foreignKey:'userId'
		});
	};
	
	return User;
	};

