const fs = require('fs');
const inquirer = require('inquirer');


inquirer 
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
    },
    {
        type: 'input',
        name: 'bio',
        message: 'tell us about yourself!',
    },
    {
        type: 'input',
        name: 'LinkedIn',
        message: 'Enter your LinkedIn URL.',
    },
    {
        type: 'input',
        name: 'GitHub',
        message: 'Enter your GitHub URL.',
    }
]);