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
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {
//if(license !== "None"){
//return `## License
// This project is licensed under the ${license} license.`;
//}
//return "";

//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let markdown = "";
  markdown += "# " + data[0] + "\n";
  markdown += renderLicenseBadge(data[6]) + "\n";
  markdown += "## Description\n";
  markdown += data[1] + "\n";
  markdown += "## Table of Contents\n";
  markdown += "- [Installation](#installation) \n- [Usage](#usage)\n- [Credits](#credits)\n- [License](#license)\n";
  markdown += "## Installation\n";
  markdown += "## Usage\n";
  markdown += "## Credits\n";
  markdown += "## License\n";
  markdown += "## Questions\n";
  markdown += "[Github Profile](https://github.com/" + data[7] + ")\n";
  markdown += "## Contributing"
  
  return markdown;
}

module.exports = generateMarkdown;
