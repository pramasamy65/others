
// Create Type Alias
type playerArray = Array<string>;
let players : playerArray = ["Dhoni", "Raina", "Rohit"];

//#### How to use Union Types in Typescript

type playerArray1 = Array<string | number>;
let players1 : playerArray1 = [7, 100, 1];

let players2 : playerArray1 = [7, 100, 1, "Sachin"];

console.log(players2);
