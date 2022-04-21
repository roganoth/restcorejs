$(document).ready(function(){
var height
var length
var hypotenuse
var ace
var base
var car

function Pythagorus(){
    event.preventDefault()
    console.log("test")
    height = $("#height").val()
    length = $("#base").val()
    ace = Math.pow(height,2);
    base = Math.pow(length,2);
    car = parseInt(ace) + parseInt(base);
    hypotenuse = Math.sqrt(car);
    console.log(hypotenuse)
    $("#answer").text(hypotenuse.toFixed(1))
}

$("#calculate").click(function(){
    console.log("test")
    Pythagorus()
})

})