#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what would you like to add in your todos?"
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "would you like to add more in your todos?",
            default: "true"
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    condition = todoQuestions.secondQuestion;
}
;
// read, add, update & delete (Home Work)
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            name: "option",
            message: "Select an option",
            type: "list",
            choices: ["Add", "Update", "View", "Delete", "Quit"]
        });
        if (answer.option === "Add") {
            let add = await inquirer.prompt({
                type: "input",
                message: "Please do add in the list",
                name: "AddUp"
            });
            todos.push(add["AddUp"]);
            todos.forEach((add) => console.log(add));
        }
        if (answer.option === "Update") {
            let updateHere = await inquirer.prompt({
                type: "list",
                message: "You can update your list",
                name: "update list",
                choices: todos.map((item) => (item))
            });
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Update your list",
                name: "updatehere"
            });
            let newTask = todos.filter((value) => value !== updateHere.todos);
            todos = [...newTask, addMore["updatehere"]];
        }
        if (answer.option === "View") {
            console.log("***TO DO LIST***");
            console.log(todos);
        }
        if (answer.option === "Delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                message: "Wanna Delete from the list?",
                name: "Delete",
                choices: todos.map((item) => (item))
            });
            let afterDel = todos.filter((val) => val !== deleteTask.Delete);
            todos = [...afterDel];
            console.log(todos);
            if (answer.option === "Quit") {
                console.log("Thank You For Using To-Do List");
            }
        }
    } while (true);
}
createTodo(todos);
