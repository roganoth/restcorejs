var height = process.argv[2]
var length = process.argv[3]
var hypotenuse
var ace
var base
var car

console.log("hello")

function Pythagorus(){
    ace = Math.pow(height,2);
    base = Math.pow(length,2);
    car = parseInt(ace) + parseInt(base);
    hypotenuse = Math.sqrt(car);
    console.log(hypotenuse)
}

Pythagorus()