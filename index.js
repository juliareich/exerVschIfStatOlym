// greater than
if(5>3){
    console.log("is greater than")
} 

// cat length
var cat = "cat"
if(cat.length === 3){
    console.log("is the length")
}

// cat = dog?
if("cat" === "dog"){
    console.log("they are the same")
} else {
    console.log("not the same")
}
//Bronze medal 1

var person = {
    name: "Bobby",
    age: 12
  }
if(person.age >= 18){
    console.log(person.name + " is allowed to go to the movie!")
} else {
    console.log(person.name + " is not allowed to go the the movie.")
}
// Bronze medal 2
var person = {
    name: "Bobby",
    age: 12
  }
if(person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie!")
} else {
    console.log(person.name + " is not allowed to go the the movie.")
}
//Bronze medal 3
var person = {
    name: "Bobby",
    age: 12
  }
if(person.name[0] === "B" && person.age >= 18){
    console.log(person.name + " is allowed to go to the movie!")
} else {
    console.log(person.name + " is not allowed to go the the movie.")
}

//silver medal 1
if(1 === "1"){
    console.log("strict")
} else if(1 == "1"){
    console.log("abstract")
} else{
    console.log("not equal at all")
}

//silver medal 2
if(1 <= 2 && 2 === 4){
    console.log("yes")
} else {
    console.log("no")
}

//gold medal
//number 1
//var word = "dog" had assigned a variable but realized didn't need to
if(typeof "dog" === "string"){
    console.log("dog")
}

//number 2
if(typeof "true" === "boolean"){
    console.log("is boolean")
} else {
    console.log("is not boolean")
}

//number 3
if(typeof x !== "undefined"){
    console.log(x)
} else {
    console.log("Variable undefined")
}

//number 4
if("s" > 12){
    console.log("s is greater")
} else {
    console.log("That doesn't make sense")
}


//number 5 or 6?
var myNumber = 8
if(myNumber % 2 === 0){
    console.log("My Number is even!")
} else {
    console.log("My Number is odd!")
}