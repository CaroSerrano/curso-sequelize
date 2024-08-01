const express = require('express');
const sequelize = require('./database/connect.js');
const companiesRouter = require('./controllers/companies.js');
const employeesRouter = require('./controllers/employees.js');
const studentsCoursesRouter = require('./controllers/studentsCourses.js')
const dotenv = require('dotenv');
dotenv.config();
// require('./models/oneToOne/person.js');
// require('./models/manyToMany/studentCourse.js');

const app = express();

app.use(express.json())

sequelize.authenticate().then(() => {
    console.log('Conexión exitosa.');
}).catch((error) => {
    console.error('Hubo un error al conectarse: ', error);
});


app.get('/', (req, res) =>{
    res.json({message: 'Todo ok'})
})

app.use(companiesRouter);
app.use(employeesRouter);
app.use(studentsCoursesRouter);


const PORT = process.env.PORT || 3001
app.listen(PORT, ()=>{
    console.log(`server on in port ${PORT}`)
})