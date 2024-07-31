const Datatypes = require('sequelize');
const sequelize = require('../../database/connect');
const Document = require('./document');

const Person = sequelize.define('Person', {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: Datatypes.STRING,
    },
    lastName: {
        type: Datatypes.STRING,
    }
}, {
    timestamps:false
})

Person.hasOne(Document, {
    foreignKey: 'personId',
    sourceKey: 'id'
})

Document.belongsTo(Person, {
    foreignKey: 'personId',
    targetKey: 'id'
})

//Para sincronizar con la base de datos (una vez creadas las tablas no hace falta sincronizar)
// Person.sync().then(()=>{
//     console.log('Sincronización exitosa.');
// }).catch((error) => {
//     console.error('Hubo un error al sincronizar Person con la BBDD' + error
//     );
// })
// Document.sync().then(()=>{
//     console.log('Sincronización exitosa.');
// }).catch((error) => {
//     console.error('Hubo un error al sincronizar Documento con la BBDD' + error);
// })

module.exports = Person;