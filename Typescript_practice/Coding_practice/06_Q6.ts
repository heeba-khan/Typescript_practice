//* 6. Using Enums for Directions
// Define an enum for directions (North, South, East, West) and 
// create a function that takes a direction and returns a string describing the direction.

enum Directions{
    North='North',
    South='South',
    East='East',
    West='West'
}

function getDir(direction:Directions):string{
    return `You are heading ${direction}`
}

console.log(getDir(Directions.North));
