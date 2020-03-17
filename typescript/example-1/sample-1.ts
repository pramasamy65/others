
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

// Arrow Functions

function person(name){
	this.name = name;
    
    this.sayhi = function(){
        setTimeout(() => {
            console.log("Name is " + this.name);
        }, 1000);
    }
}

const obj = new person('Prakash');
obj.sayhi();