//Constant Variables
const inquirer = require('inquirer');
const fs = require('fs/promises');
const cTable = require('console.table');
const express = require('express');
mysql = require('mysql2');


// Server 
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: 'Rootr00t!',
    database: 'employees_db'
  },
  console.log(`Connected to the courses_db database.`)
);

const prompInit = () => {
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
      const { choices } = answers;

      if (choices === 'View All Employees') {
        viewAllEmployees();
      }

      if (choices === 'View All Departments') {
        viewAllDepartments();
      }

      if (choices === 'Add Employee') {
        addEmployee();
      }

      if (choices === 'Update Employee Role') {
        updateEmployeeRole();
      }

      if (choices === 'View All Roles') {
        viewAllRoles();
      }

      if (choices === 'Add Role') {
        addRole();
      }

      if (choices === 'Add Department') {
        addDepartment();
      }

      if (choices === 'Exit') {
        connection.end();
      }
    })
};

//Command Line Program Begin 
prompInit()


//Selector Functions
function viewAllEmployees() {
  db.query(`SELECT * FROM EMPLOYEE`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
  prompInit()
}

function viewAllDepartments() {
  db.query(`SELECT * FROM DEPARTMENT`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
  prompInit()
};

function viewAllRoles() {
  db.query(`SELECT * FROM ROLES`, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
  prompInit()
};

function addEmployee() {
  inquirer.prompt([
    {
      type: "input",
      message: "What is the Employee's name?",
      name: 'addEmployee',
    }
  ])
    .then
  db.query(`INSERT INTO employee`, answers)
  prompInit()
};

function updateEmployeeRole() {
  db.query(``, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
  prompInit()
};

function addRole() {
  db.query(``, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
  prompInit()
};

function addDepartment() {
  db.query(``, (err, result) => {
    if (err) {
      console.log(err);
    }
    console.table(result);
  });
  prompInit()
};
