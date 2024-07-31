const Datatypes = require('sequelize');
const sequelize = require('../../database/connect');

const Course = sequelize.define('Course', {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Datatypes.STRING
    },
    teacher: {
        type: Datatypes.STRING
    }
}, {
    timestamps: false
})

module.exports = Course;