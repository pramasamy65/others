//Complex Data Types with Interface

interface messageCreators {
    (name:string): string;
}

function message1(name:string){
    return `Welcome to Typescript World ${name}`
}

const msgCall1 : messageCreators = message1;

console.log(msgCall1('Prakash')); //Welcome to Typescript World Prakash


// Enums

enum color{
    RED, WHITE,BLACK
}
console.log(color);
/**
 * Output
 * 
 *  '0': 'RED',
  '1': 'WHITE',
  '2': 'BLACK',
  RED: 0,
  WHITE: 1,
  BLACK: 2 }
 */
console.log(color.RED); //0
console.log(color["WHITE"]); //1
console.log(color.BLACK); //2