// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let Name_of_the_space_shuttle = "Determination";
let Shuttle_Speed_mph = 17500
let Distance_to_Mars_km = 225000000
let Distance_to_Moon_km = 384400
let Miles_per_kilometer = 0.621

console.log(typeof Name_of_the_space_shuttle);
console.log(typeof Shuttle_Speed_mph);
console.log(typeof Distance_to_Mars_km);
console.log(typeof Distance_to_Moon_km);
console.log(typeof Miles_per_kilometer);

let Miles_to_Mars = Distance_to_Mars_km * Miles_per_kilometer;
let Hours_to_Mars = Miles_to_Mars / Shuttle_Speed_mph;
let Days_to_Mars = Hours_to_Mars / 24

console.log(Name_of_the_space_shuttle + " will take " + Days_to_Mars + " days to reach Mars.");