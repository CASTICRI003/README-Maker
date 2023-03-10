// got license badges from https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)";
      case 'APACHE 2.0':
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        case 'GPL 3.0':
          return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          case 'BSD 3':
            return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
            case 'None':
              return " ";
  }
};
// put links, badges, and sections into switch cases



function generateMarkdown(answers) {
  return `# ${answers.title}

  ## Description
  ${answers.description}

  ## License 

  ${renderLicenseBadge(answers.license)}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  \`${answers.install}\`

  ## Usage

  ${answers.usage}

  ## Tests

  \`${answers.tests}\`

  ## Contributing

  ${answers.contribute}

  ## Questions

  Send me questions here: ${answers.email}.
  See more of my work here: [Github](https://github.com/${answers.name}).

`;
}

module.exports = generateMarkdown;
