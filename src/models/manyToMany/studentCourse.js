const Datatypes = require('sequelize');
const sequelize = require('../../database/connect');
const Course = require('./course');
const Student = require('./student')

const StudentCourse = sequelize.define('StudentCourse', {
    id: {
        type: Datatypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    }
}, {
    timestamps: false
})

Student.belongsToMany(Course, {
    through: StudentCourse
})

Course.belongsToMany(Student, {
    through: StudentCourse
})


//Para sincronizar con la base de datos (una vez creadas las tablas no hay que sincronizar)
// Student.sync().then(()=>{
//     console.log('Sincronización exitosa.');
// }).catch((error) => {
//     console.error('Hubo un error al sincronizar Person con la BBDD' + error
//     );
// })
// Course.sync().then(()=>{
//     console.log('Sincronización exitosa.');
// }).catch((error) => {
//     console.error('Hubo un error al sincronizar Documento con la BBDD' + error);
// })
// StudentCourse.sync().then(()=>{
//     console.log('Sincronización exitosa.');
// }).catch((error) => {
//     console.error('Hubo un error al sincronizar Documento con la BBDD' + error);
// })

module.exports = StudentCourse;