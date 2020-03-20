
import {printName} from "./export"

printName('Hay Typescript'); // Name is Hay Typescript

// Optional

type name = {'firstName' ?: string, 'lastName' : string};

let person : name = {
    firstName : 'Prakash',
    lastName : 'Ramasamy'
};
person.firstName='';

// Below Type is name, So it will have only name-Type properties
let anotherPerson : name = {
    lastName : 'Ramasamy'
};

// Below Type is any, So it will have any properties
let anotherPerson1 : any = {
    lastName : 'Ramasamy'
};
anotherPerson1.address='';