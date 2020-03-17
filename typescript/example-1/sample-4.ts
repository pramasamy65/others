
import {printName} from "./export"

printName('Hay Typescript'); // Name is Hay Typescript

// Optional

type name = {'firstName' ?: string, 'lastName' : string};

let person : name = {
    firstName : 'Prakash',
    lastName : 'Ramasamy'
};
person.firstName='';

let anotherPerson : name = {
    lastName : 'Ramasamy'
};

let anotherPerson1 : any = {
    lastName : 'Ramasamy'
};
anotherPerson1.address='';