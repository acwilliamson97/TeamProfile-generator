# TeamProfile-generator

This Node CLI application creates a webpage based on a team member's user inputs that displays the name, email, role, and other relevant information depending on their role. For example, interns are asked to provide the name of the school they attend, whereas engineers are asked to provide their GitHub username, and managers are asked to provide their office number. 

The Inquirer npm package is used to prompt the user with each question and constructor classes are used to streamline the process. For example, "interns", "engineers", and "managers" each inherit specific properties and methods , such as "name", "email", and "role" from the "employees" class, and also have some of their own properties and methods such as "school", "GitHub username", or "office number", which are role dependent.  

A team roster titled "team.html" will be generated inside the "output" folder. Each user input must meet a number of requirements (pass a number of tests) in order to be posted to the team roster successfully.
