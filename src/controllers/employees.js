const Router = require ('express');
const Employee = require('../models/employee')
const employeesRouter = Router();

//Muestra todos los empleados
employeesRouter.get('/employees', async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
})

//Muestra un empleado, buscándolo por su ID
employeesRouter.get('/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findByPk(id);
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
})

//Crear un nuevo empleado
employeesRouter.post('/employees', async (req, res) => {
    try {
        const {first_name, last_name, role, company_id}=req.body
        const newEmployee = await Employee.create({
            first_name,
            last_name,
            role,
            company_id
        })
        res.status(201).json(newEmployee);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
})

//Modificar los datos de un empleado mediante su ID
employeesRouter.put('/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const employee = await Employee.findByPk(id);
        employee.set(req.body);
        await employee.save();
        res.status(202).json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message})
    }
})

//Eliminar un empleado mediante su ID
employeesRouter.delete('/employees/:id', async (req, res) => {
    try {
        const id = req.params.id;
        await Employee.destroy({
            where: {id}
        })
        res.status(204).end();
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});
    }
})

module.exports = employeesRouter;