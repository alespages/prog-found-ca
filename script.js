// question 1

var myList = "one";

//question 2

var person = {
    name: "Hansen",
    nationality: 28
};

//question 3

var outOfStock = true;
if (outOfStock) {
    console.log("Out of stock")
}else{
    console.log("In stock")
};

//question 4

var numbersArray = [0, 1, 2, 3, 4 ];
for(i=0; i<5; i++)
{
    console.log(i)
};

//question 5

for(var i = 15; i <= 25; i++){
    console.log(i);
};

// question 6

for(var i = 15; i <= 25; i++){
    if(i===20){
        console.log(i);
    }
};

//question 7

var animalArray = [
    {
    name: "Cat",
    age: 2,
    pet: true
},
{
    name: "Tiger",
    age: 4,
    pet: false
}
];
for(var i = 0; i < animalArray.length; i++){
    console.log(animalArray[i].age); 
    console.log(animalArray[i].pet);
}

//question 8

function whatIDontLike(aFood) {
    console.log("I don't like " + aFood);
    } 
    whatIDontLike("lutefisk.");

//question 9

function substractFunction(a, b){
    var result = b - a;
    console.log(result);
}
substractFunction(3, 4);

//question 10

var emptyArray = []

function whatILike(anActivity) {
    emptyArray.push(anActivity);
}
whatILike("Dance");
console.log(emptyArray);

