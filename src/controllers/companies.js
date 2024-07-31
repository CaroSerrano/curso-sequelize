const Router = require ('express');
const Company = require('../models/company')
const Employee = require('../models/employee');
const companiesRouter = Router();

//Ruta para traer todas las compañías
companiesRouter.get('/companies', async(req, res) => {
    try {
        const companies = await Company.findAll();
        res.json(companies);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Buscar una compañía por su ID
companiesRouter.get('/companies/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const company = await Company.findByPk(id);
        res.json(company);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Muestra todas las compañias y los empleados asociados a cada una (equivale a un LEFT JOIN)
companiesRouter.get('/companies/:id/employees', async(req, res) => {
    try {
        const id = req.params.id;
        const company = await Company.findOne({
            where: {id},
            include: {
                model: Employee,
                attributes: ['first_name', 'last_name']
            }
        })
        res.json(company);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Crear una nueva compañia
companiesRouter.post('/companies', async(req, res) => {
    try {
        const {name, description} = req.body
        const newCompany = await Company.create({
            name,
            description
        })
        res.status(201).json(newCompany);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Modificar una compañia mediante su ID
companiesRouter.put('/companies/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const company = await Company.findByPk(id);
        company.set(req.body);
        await company.save();
        res.status(202).json(company);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})

//Eliminar una compañía mediante su ID
companiesRouter.delete('/companies/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Company.destroy({
            where: {id}
        })
        res.status(204).end() //el .json() te hace un end() de forma automática. Si omitis el .json tenes que poner un .end() para que finalice la petición.
    } catch (error) {
        res.status(500).json({error: error.message})
    }
})
module.exports = companiesRouter;