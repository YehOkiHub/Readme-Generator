// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  

 return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if(license === "apache"){
    return "https://opensource.org/licenses/Apache-2.0"

  }else if(license === "MIT"){
    return "https://opensource.org/licenses/MIT"

  }else if(license === "gnu"){
    return "https://www.gnu.org/licenses/gpl-3.0"

  }else if(license === "isc"){
    return "https://opensource.org/licenses/ISC"

  }else if(license === "open"){
    return "https://opendatacommons.org/licenses/by/"

  } else(license === "mozilla");{
  
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  let badgeLink = `${renderLicenseBadge(license)}
  [License Link](${renderLicenseLink(license)})`

  return badgeLink



}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

  let template = `# ${data.title}     
  ${renderLicenseSection(data.license)}



      
## Table of Contents


- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)      

##  Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}


## Questions

Contact me via Github
[${data.username}](https://github.com/${data.username})

Contact me
${data.email}

       
`

  return template
 ;
}

module.exports = generateMarkdown;
