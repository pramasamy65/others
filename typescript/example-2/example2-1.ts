console.log('Aliases Union Vs Intersection Types');

interface HasName {
    firstName : string,
    lastName : string
}

interface Address {
    address : string
}

//Intersection Types
type Player  = HasName & Address;

//Aliases Union 
type Player1  = (HasName & Address) | null;

const players : Player = {firstName : '', lastName : '', address : ''}