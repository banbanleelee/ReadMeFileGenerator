//Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'problemSolved',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learnings',
    },
    {
        type: 'input',
        message: 'How to install your application?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Where does your demo image locate? (relative path)',
        name: 'imageSource',
    },
    {
        type: 'input',
        message: 'How to use your application?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What\'s your collaborator\'s name?',
        name: 'collaboratorName',
    },
    {
        type: 'input',
        message: 'What\'s your collaborator\'s GitHub link?',
        name: 'collaboratorLink',
    },
    {
        type: 'list',
        message: 'Which license are you using?',
        choices: ['Apache', 'Boost', 'BSD', 'CC0', 'Eclipse', 'GNU', 'ISC', 'MIT'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'If your project has a lot of features, list them here.',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Enter an email for other people to contribute to your application',
        name: 'contributionEmail',
    },
    {
        type: 'input',
        message: 'Share your test instructions',
        name: 'test',
    },
];

inquirer 
    .prompt(questions)
    .then((data) => {
        fs.readFile('index.md', "utf8", (err, file) => {
            if (err) {
                throw err;
            }
            console.log(typeof(file));
            console.log(file);
          
            const result = file
                .replace('{title}', data.title)
                .replace('{licenseBadge}', licenseBadge(data.license))
                .replace('{motivation}', data.motivation)
                .replace('{problemSolved}', data.problemSolved)
                .replace('{learnings}', data.learnings)
                .replace('{installation}', data.installation)
                .replace('{imageSource}', data.imageSource)
                .replace('{usage}', data.usage)
                .replace('{collaboratorName}', data.collaboratorName)
                .replace('{collaboratorLink}', data.collaboratorLink)
                .replace('{license}', data.license)
                .replace('{features}', data.features)
                .replace('{contributionEmail}', data.contributionEmail)
                .replace('{test}', data.test)
            fs.writeFile('README.md', result, (err) =>
                err ? console.error(err) : console.log('Successfully updated.')
            );
        });
    });

    function licenseBadge(license) {
        switch (license) {
            case 'Apache':
                return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
            break;
            case 'Boost':
                return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
            break;
            case 'BSD':
                return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
            break;
            case 'CC0':
                return '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)';
            break;
            case 'Eclipse':
                return '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)';
            break;
            case 'GNU':
                return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
            break;
            case 'ISC':
                return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
            break;
            case 'MIT':
                return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
        };
    }