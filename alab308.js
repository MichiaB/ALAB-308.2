const Pi = 3.1415
const area= Pi * radius * radius; 
    console.log(area)
const radius = 5;

const plantspace = 0.8 

const startingplants = 20

const maxcapacity = area/ plantspace; 


//Week 1: 20 * 2 = 40
let week1= startingplants *2;

//Week 2: 40 * 2 = 80
let week2 = week1 * 2; 

//Week 3: 80 *2 = 160
let week3 = week2 * 2;

console.log ( "Week 1 plants:", week1);






// Part One 

if ( week1 > maxcapacity * 0.8) {
    console.log ( "Week1: Plants should be Pruned");
} else if ( week1 >= maxcapacity * 0.5) { 
    console.log("Week 1: Plants should be Monitored");
} else {
    console.log("Week 1: More plants should be planted");
}

if ( week2 > maxcapacity * 0.8) {
    console.log ( "Week 2: Plants should be Pruned");
} else if ( week2 >= maxcapacity * 0.5) { 
    console.log("Week 2: Plants should be Monitored");
} else {
    console.log("Week 2: More plants should be planted");
}

if ( week3 > maxcapacity * 0.8) {
    console.log ( "Week 3: Plants should be Pruned");
} else if ( week3 >= maxcapacity * 0.5) { 
    console.log("Week 3: Plants should be Monitored");
} else {
    console.log("Week 3: More plants should be planted");
}

// Part 2


// 100 Plants  
// No pruning for 10 weeks 


let startingplants2 = 100;
let week2= 10;
let additionalspace = startingplants2 * 0.8
let plants2 = startingplants2 * (2 ** week2); 
let requiredspace = plants2 * plantspace; 
let expandedradius = Math.sqrt(requiredspace / Pi);

console.log ("Plants after 10 weeks", plants2);
console.log("Requried space:", requiredspace);
console.log(" Additional Space Needed", additionalspace);
console.log("Expanded gard radius:", expandedradius);



// Part 3

try{
    if ( requiredspace > area){
        throw new Error( 
            "The plants need more space than the garden has"
        );
      
    }  console.log("There is enough space for the plants.");
} catch ( error) {
    console.log("Error:", error.message);
}
