const Router = require('express');
const Course = require('../models/manyToMany/course');
const Student = require('../models/manyToMany/student');
//se debe importar el modelo en donde está hecha la asociación:
require('../models/manyToMany/studentCourse');

const studentsCoursesRouter = Router();

//Muestra todos los estudiantes y los cursos asociados a cada uno de ellos
studentsCoursesRouter.get('/students/courses', async(req, res) => {
    try {
        const students = await Student.findAll({
            include: {
                model: Course
            }
        })
        res.json(students)
    } catch (error) {
        console.error(error);
        console.error(error.name);
        res.status(500).json({error: error.message})
    }
})

//Muestra todos los cursos y los estudiantes asociados a cada uno de ellos
studentsCoursesRouter.get('/courses/students', async (req, res)=> {
    try {
        const courses = await Course.findAll({
            include: {
                model: Student
            }
        })
        res.json(courses)
    } catch (error) {
        console.error(error);
        console.error(error.name);
        res.status(500).json({error: error.message})
    }
})

module.exports = studentsCoursesRouter;