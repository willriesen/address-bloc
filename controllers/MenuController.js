const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
    constructor(){
      
      this.mainMenuQuestions = [
   {
     type: "list",
     name: "mainMenuChoice",
     message: "Please choose from an option below: ",
     choices: [
       "Add new contact",
       "Get date and time",
       "Exit"
     ]
   }
 ];
 this.book = new ContactController();
    }
 
  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
      switch(response.mainMenuChoice){
        case "Add new contact":
          this.addContact();
          break;
        case "Get date and time":
           this.getDate();
           break;
        case 'Remind Me':
           this.remindMe();
           break;
        case "Exit":
          this.exit();
        default:
          console.log("Invalid input");
          this.main();
      }
    })
    .catch((err) => {
      console.log(err);
    });
    }
 
    clear(){
      console.log("\x1Bc");
    }
 
    addContact(){
     this.clear();
     inquirer.prompt(this.book.addContactQuestions).then((answers) => {
      this.book.addContact(answers.name, answers.phone).then((contact) => {
        console.log("Contact added successfully!");
        this.main();
      }).catch((err) => {
        console.log(err);
        this.main();
      });
    });
   }
 
   getDate(){
    const now = new Date();
    this.clear();
    console.log(now.toLocaleString());
    this.main();
  }
 
   exit(){
     console.log("Thanks for using AddressBloc!");
     process.exit();
   }

  

  remindMe() {
    console.log('Learning is a life-long pursuit');
    this.main();
    return 'Learning is a life-long pursuit';
  }

 }
 
   