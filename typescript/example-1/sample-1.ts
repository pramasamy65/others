
// Normal Functions
function personOther(name){
	this.name = name;
    
    this.sayhi = function(){
        setTimeout(function() {
            console.log("Name is " + this.name);
        }, 1000);
    }
}

const obj1 = new personOther('Prakash Other');
obj1.sayhi();

//Output : Name is undefined

function personOther1(name){
	this.name = name;
    this.sayhi = function(){
        setTimeout(function() {
            console.log("Name is " + this.name);
        }, 1000);
    }
}

const obj2 = new personOther('Prakash Other Var');
obj1.sayhi();

//Output : Name is undefined

// Arrow Functions

export function person(name){
	this.name = name;
    
    this.sayhi = function(){
        setTimeout(() => {
            console.log("Name is " + this.name);
        }, 1000);
    }
}

//Output : Name is Prakash

const obj = new person('Prakash');
obj.sayhi();