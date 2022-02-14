const sum = (a,b) => {
  
    if(!(a && b)){
        return "Invalid Input"
    }
    
    return a + b;
}

//console.log("The sum is: ", sum(null,6))
//const square = (a) => exponent(a,2); //<-- this would be another way of doing the functions 
const square = (a) => {
 if(!a){
     return "Invalid Input"
 }
    return a * a;
}

const cube = (a) => {
    if(!a){
        return "Invalid Input"
    }
    return a ** 3
    // **  means exponent so its to the power of 3
}

const exponent = (num, power = 1) => {
    return num ** power
}
//this basically says if there is no power then its by the power of 1

module.exports = {sum, square, cube};
//dont forget to add the 's' after export

//an easy way to do this is go up to run, start debugging
// you can use breakpoints to stop the code to see where your mistake is and slowly start figuring out where it is

