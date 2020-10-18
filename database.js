const Sequelize = require('sequelize')
const epilogue = require('epilogue')

const database = new Sequelize({
    dialect: 'sqlite',
    storage: './employee.sqlite',
    operatorsAliases: false
})

const Part = database.define('employee', {
    empId: Sequelize.STRING,
    empName: Sequelize.STRING,
    empDept: Sequelize.STRING,

})

const initializeDatabase = async(app) => {
    epilogue.initialize({ app, sequelize: database })
    await database.sync()
}
getEmployees = async(req, res) => {
    try {

        Part.findAll().then(employees => res.json(employees))
    } catch (error) {
        console.error(`Error: ${error.message}`)
    }
}
createEmployees = async(req, res) => {
    var response = {};
    try {
        if (req.body.empId == "" || req.body.empId == undefined) {
            response.success = "0";
            response.msg = "Please give empId";
            res.json(response)
        } else if (req.body.empName == "" || req.body.empName == undefined) {
            response.success = "0";
            response.msg = "Please give empName";
            res.json(response)
        } else if (req.body.empDept == "" || req.body.empDept == undefined) {
            response.success = "0";
            response.msg = "Please give empDept";
            res.json(response)
        } else {
            Part.create(req.body);
            response.success = "1";
            response.msg = "Employee created successfully";
        }
        res.json(response)


    } catch (error) {
        response.success = "0";
        response.msg = "Something went wrong";
        res.json(response)
    }
}
module.exports = initializeDatabase