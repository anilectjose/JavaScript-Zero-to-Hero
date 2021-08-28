//Array of objects creation

let food=[
    {
        name:"Dosa",
        price:8,
        quantity:45
    }
    ,
    {
        name:"Chapathi",
        price:10,
        quantity:100
    }
    ,
    {
        name:"Meals",
        price:60,
        quantity:20
    }
]


//Adding new object to the array

food.push({name:"Idli",price:5, quantity:70});


//for loop to display each object in console

for(let num=0;num<food.length;num++){
    console.log(food[num]);
}


//Displaying all object in console in single line code
console.log(food)




















































