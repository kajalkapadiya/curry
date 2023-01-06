//by bind

let multiply = function(x,y){
    console.log(x*y);
}

let multiplybyTwo = multiply.bind(this, 2);
multiplybyTwo(3);


//by clouser

let addition = function(w){
    return function(z){
    console.log(w+z);
    }
}

let addbyTwo = addition(5);
addbyTwo(2);