const Datatypes = require('sequelize');
const sequelize = require('../../database/connect');

const Document = sequelize.define('Document', {
    number: {
        type: Datatypes.INTEGER,
        primaryKey: true
    },
    type: {
        type: Datatypes.STRING,
        defaultValue: 'card'
    }
}, {
    timestamps: false
})

module.exports = Document;