




const Manager = require ("./lib/Manager")
const Intern = require ("./lib/Intern")
const Engineer = require ("./lib/Engineer")
const inquirer = require ("inquirer")
const fs = require ("fs")
const path = require ("path")
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./src/page-template.js");
const team = []
const id = []

function runTeam(){
function intern (){
    inquirer.prompt([
        {
           type:"input",
           name:"internName",
           message:"what is the interns name" 
        },
        {
            type:"input",
            name:"internId",
            message:"what is the interns id"  
        },
        {
            type:"input",
            name:"internEmail",
            message:"what is the interns email" 
        },
        {
            type:"input",
            name:"internSchool",
            message:"what is the interns school" 
        }
    ]).then(answers =>{
        const intern = new Intern(answers.internName,answers.internId,answers.internEmail,answers.internSchool)
        team.push(intern)
        id.push(answers.internId)
        build ()
    })
}

function build(){
    inquirer.prompt([
        {
            type:"list",
            name:"myChoice",
            message:"which employee would you like to add to the team",
            choices:["engineer","intern","manager","no more people"]
        }
    ]).then(user =>{
        switch (myChoice.user){
            case "intern":
                intern();
                break;
                case "engineer":
                engineer();
                break;
                case "manager":
                manager();
                break;
                default:
                generate ()

                
        }
    })
}

function generate (){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, render(team), "utf-8");

}

function engineer (){
    inquirer.prompt([
        {
           type:"input",
           name:"engineerName",
           message:"what is the engineers name" 
        },
        {
            type:"input",
            name:"engineerId",
            message:"what is the engineers id"  
        },
        {
            type:"input",
            name:"engineerEmail",
            message:"what is the engineers email" 
        },
        {
            type:"input",
            name:"engineerGithub",
            message:"what is the engineers github" 
        }
    ]).then(answers =>{
        const engineer = new Engineer(answers.engineerName,answers.engineerId,answers.engineerEmail,answers.engineerGithub)
        team.push(engineer)
        id.push(answers.engineerId)
        build ()
    })
}

function manager (){
    inquirer.prompt([
        {
            type:"input",
            name:"managerName",
            message:"what is the managers name" 
        },
        {
            type:"input",
            name:"managerId",
            message:"what is the managers id"  
        },
        {
            type:"input",
            name:"managerEmail",
            message:"what is the managers email" 
        },
        {
            type:"input",
            name:"managerOfficeNumber",
            message:"what is the managers office number" 
        }
    ]).then(answers =>{
        const manager = new Manager(answers.managerName,answers.managerId,answers.managerEmail,answers.managerOfficeNumber)
        team.push(manager)
        id.push(answers.managerId)
        build ()
    })
}



}
runTeam()