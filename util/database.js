const Sequelize = require('sequelize');

const sequelize = new Sequelize('expense_tracker', 'root', 'Pavan@1729' ,
{dialect: 'mysql', host: 'localhost'});

module.exports =  sequelize;
