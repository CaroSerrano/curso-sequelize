const Datatypes = require ('sequelize');
const sequelize = require ('../database/connect');

const Employee = sequelize.define('Employee', {
    id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    first_name: {
        type: Datatypes.STRING
    },
    last_name: {
        type: Datatypes.STRING
    },
    role: {
        type: Datatypes.STRING,
        defaultValue: 'empleado'
    },
    active: {
        type: Datatypes.BOOLEAN,
        defaultValue: true
    }
}, {
    timestamps: false
})

module.exports = Employee;