
// Optional Functional parameter

function nameManipulation(firstName: string, lastName: string, greetings = 'hi'){
    console.log(firstName + ' ' + lastName + ' - '+ greetings);
}
nameManipulation('Prakash', 'Ramasamy'); // Prakash Ramasamy - hi
nameManipulation('Prakash', 'Ramasamy', 'hello'); // Prakash Ramasamy - hello


// Optional Functional parameter - Array

function nameManipulationArray(greetings = ['']){
    console.log(greetings);
}
nameManipulationArray(); // [ '' ]

// Array Concat

const greetings = ['Hi ' , 'Welcome to ', 'Typescript World'];
const greetingsFinal = greetings.concat('Learning Begins');
nameManipulationArray(greetings); // [ 'Hi ', 'Welcome to ', 'Typescript World' ]
nameManipulationArray(greetingsFinal); // [ 'Hi ', 'Welcome to ', 'Typescript World', 'Learning Begins' ]

// Array Spread Operator
const greetingsFinal1 = [...greetings, 'New Learning'];
nameManipulationArray(greetingsFinal1); //[ 'Hi ', 'Welcome to ', 'Typescript World', 'New Learning' ]


// REST Operator
console.log('###### REST Operator #####');

function restOperator(...greetings){
    console.log(greetings);
}
restOperator();//[]
restOperator(greetingsFinal); //[ 'Hi ', 'Welcome to ', 'Typescript World', 'Learning Begins' ]
