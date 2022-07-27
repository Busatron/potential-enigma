// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [{
    name: 'title',
    message: 'What is the title of your project?',
    type: 'input'
}, {
    name: 'description',
    message: 'Please describe your project.',
    type: 'input'
}, {
    name: 'install',
    message: 'Please provide instructions for installation.',
    type: 'input'
}, {
    name: 'usage',
    message: 'Please provide usage information.',
    type: 'input'
}, {
    name: 'guide',
    message: 'Please provide guidelines for contribution.',
    type: 'input'
}, {
    name: 'test',
    message: 'Please provide instructions for testing.',
    type: 'input'
}, {
    name: 'license',
    message: 'What is the license for this application?',
    type: 'checkbox',
    choices: ''
}, {
    name: 'github',
    message: 'Please enter your Github username.',
    type: 'input'
}, {
    name: 'email',
    message: 'Please enter your email address.',
    type: 'input'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    const writeFile = fileContent => {
        return new Promise((resolve, reject) => {
        fs.writeFile('./potential-enigma/README.md,', data, err => {
            if (err) {
                reject(err);

                return;
            }

            resolve({
                ok: true,
                message: 'README.md created!'
                });
            });
        });
    };
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();



const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };