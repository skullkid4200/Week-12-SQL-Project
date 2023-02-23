const inquirer = require('inquirer');
const fs = require('fs/promises');
const cTable = require('console.table');
// const connection = require('./connection');


inquirer
  .prompt([
    {
      type: 'list',
      choices: ["View All Employees", new inquirer.Separator(), 
    "Add Employee", new inquirer.Separator(), "Update Employee Role", new inquirer.Separator(),
    "View All Roles", new inquirer.Separator(), "Add Role", new inquirer.Separator(), 
    "View All Departments", new inquirer.Separator(), "Add Department", new inquirer.Separator()],
      message: 'What would you like to do?',
      name: 'choices',
    }

  ])
  .then((answers) => {
    const {choices} = answers;

      if (choices === 'View All Employees') {
          viewAllEmployees();
      }

      if (choices === 'View All Departments') {
        viewAllDepartments();
    }

      if (choices === 'View All Employees By Department') {
          viewEmployeesByDepartment();
      }

      if (choices === 'Add Employee') {
          addEmployee();
      }

      if (choices === 'Remove Employee') {
          removeEmployee();
      }

      if (choices === 'Update Employee Role') {
          updateEmployeeRole();
      }

      if (choices === 'Update Employee Manager') {
          updateEmployeeManager();
      }

      if (choices === 'View All Roles') {
          viewAllRoles();
      }

      if (choices === 'Add Role') {
          addRole();
      }

      if (choices === 'Remove Role') {
          removeRole();
      }

      if (choices === 'Add Department') {
          addDepartment();
      }

      if (choices === 'View Department Budgets') {
          viewDepartmentBudget();
      }

      if (choices === 'Remove Department') {
          removeDepartment();
      }

      if (choices === 'Exit') {
          connection.end();
      }
});

//view employees
const viewAllEmployees = () => {
  let sql =       `SELECT employee.id, 
                  employee.first_name, 
                  employee.last_name, 
                  role.title, 
                  department.department_name AS 'department', 
                  role.salary
                  FROM employee, role, department 
                  WHERE department.id = role.department_id 
                  AND role.id = employee.role_id
                  ORDER BY employee.id ASC`;
  connection.promise().query(sql, (error, response) => {
    if (error) throw error;
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.log(`                              ` + chalk.green.bold(`Current Employees:`));
    console.log(chalk.yellow.bold(`====================================================================================`));
    console.table(response);
    console.log(chalk.yellow.bold(`====================================================================================`));
    promptUser();
  });
};
