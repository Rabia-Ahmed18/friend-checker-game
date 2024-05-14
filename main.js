/* Prompt the user to enter a name.
• Use a switch statement to check if the entered name is a known friend.
• Output a confirmation message if the name is known, otherwise output a default
response.  */
import inquirer from "inquirer";
let friendName = await inquirer.prompt([
    {
        name: "name1",
        type: "input",
        message: "Enter a name:"
    }
]);
switch (friendName.name1) {
    case "rabia":
        console.log(`Hi rabia! you are a known friend`);
        break;
    case "iqra":
        console.log(`Hello iqra ! you are a known friend.`);
        break;
    case "saba":
        console.log(`Hey saba! you are a known friend.`);
        break;
    default:
        console.log(`I dont recognize this name.`);
        break;
}
;
