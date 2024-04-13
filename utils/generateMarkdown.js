// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }else if (license == "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
  }else if (license == "GPL") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  }else if (license == "BSD") {
    return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }else {
    return "";
  }
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  license = license.toUpperCase();
  if (license == "MIT") {
    return "[MIT](https://opensource.org/licenses/MIT)"
  } else if (license == "APACHE") {
    return "[Apache](https://opensource.org/licenses/Apache-2.0)"
  } else if (license == "GPL") {
    return "[GPL](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license == "BSD") {
    return "[BSD](https://opensource.org/licenses/BSD-3-Clause)"
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {
// if(license !== "None"){
//   return (
//   `* [License](#license)`
//   )
// }
// return "";

// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data[0]}
  ${renderLicenseBadge(data[6])}

  ## Description
  ${data[1]}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contributing](#contributing)
  * [Questions](#questions)
   

    ## Installations
    ${data[2]}

    ## Usage
    ${data[4]}
    
    ## License 
     ${renderLicenseLink(data[6])}

    ## Contributors
    ${data[3]}

    ## Questions
    For Additional questions, contact me at the email provided below.

    - Github: [${data[7]}](https://github.com/${data.github}/)
    - Email: ${data[8]}
  `;
}

  // let markdown = "";
  // markdown += "# " + data[0] + "\n";
  // markdown += renderLicenseBadge(data[6]) + "\n";
  // markdown += "## Description\n";
  // markdown += data[1] + "\n";
  // markdown += "## Table of Contents\n";
  // markdown += "- [Installation](#installation) \n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n- [Questions](#questions)\n- [Contributing](#contributing)\n";
  // markdown += "## Installation\n";
  // markdown += "## Usage\n";
  // markdown += "## Credits\n";
  // markdown += "## License\n";
  // markdown += "## Questions\n";
  // markdown += "[Github Profile](https://github.com/" + data[7] + ")\n";
  // markdown += "## Contributing";
  
  // return markdown;
// }

module.exports = generateMarkdown;
