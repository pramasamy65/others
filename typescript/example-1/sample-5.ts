//Complex Data Types

type messageCreator = (name:string)=> string;

function message(name:string){
    return `Welcome to Typescript World ${name}`
}
// Function Type - Declaring function as Type
const msgCall : messageCreator = message;

console.log(msgCall('Prakash'));