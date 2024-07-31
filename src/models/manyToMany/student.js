const Datatypes = require('sequelize');
const sequelize = require('../../database/connect');

const Student = sequelize.define('Student', {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Datatypes.STRING
    },
    legajo: {
        type: Datatypes.INTEGER
    }
}, {
    timestamps: false
})

module.exports = Student;