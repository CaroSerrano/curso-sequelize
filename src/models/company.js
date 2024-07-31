const Datatypes = require ('sequelize');
const sequelize = require ('../database/connect');
const Employee = require ('./employee.js')

const Company = sequelize.define('Company', {
    id:{
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Datatypes.STRING,
        unique: true,
        allowNull: false
    },
    description: {
        type: Datatypes.STRING
    }
}, {
    timestamps: false
})

//Definición de relaciones entre tablas
Company.hasMany(Employee, {
    foreignKey: 'company_id',
    sourceKey: 'id'
})

Employee.belongsTo(Company, {
    foreignKey: 'company_id',
    targetKey: 'id'
})

//Para sincronizar con la base de datos (una vez creadas las tablas no hace falta sincronizar)
// Company.sync().then(()=>{
//     console.log('Sincronización exitosa.');
// }).catch((error) => {
//     console.error('Hubo un error al sincronizar Company con la BBDD');
// })
// Employee.sync().then(()=>{
//     console.log('Sincronización exitosa.');
// }).catch((error) => {
//     console.error('Hubo un error al sincronizar Employee con la BBDD');
// })

module.exports = Company;

