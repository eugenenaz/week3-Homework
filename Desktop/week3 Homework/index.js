//Question 1

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[0] - ages.length);{
     
    let ages = [3, 9, 23, 64, 2, 8, 28, 93, 99];
    console.log(ages[0] - ages.length);
 };

 function getAvg(ages) {
    const total = ages.reduce((euu, u) => euu + u, 0);
    return total / ages.length;
  }
  
  const average = getAvg(ages);
  console.log(average);


//Question 2

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let lengths = names.map(function(element){
    return element.length;
})
console.log(lengths);


for (names of names){
    console.log(names);
}

// Question 5
let name = 0;
let nameLength = ['Kofi', 'Ama', 'Abena', 'Yaw'];
for (let i = 0; i < nameLength.length; i++){
    nameLength.nameLength[i];
}



    
    
    
    
