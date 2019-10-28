// Rover Object Goes Here
// ENTREGAR ANTES DEL 4/10/2019
// ======================
var rover = {
  direction: "N", //defaul direction: "N". Valid directions "N", "S", "E", or "W".
  x: 0,
  y: 0,
}
// ======================

/*
Create a function that receives a list of commands. These commands will be the first letter of either 
(f)orward, 
(r)ight, 
(l)eft.

To test it, use the string: ‘rffrfflfrff’.

Suggested Approach

Use a loop to iterate over the string. Inside of this loop, write a switch or if statement to call the correct function. 
For instance, if the letter is f, you’re going to want to call the goForward function.
*/
function go(){
  for 
    var move // Recibe el movimiento
    switch // decidir si es f, l, r...
      // el marron que tengo que solucionar ASAP
}

function turnLeft(rover){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case "N":
        rover.direction = "W";
        console.log("← El rover mira al Oeste");
      break;
    case "W":
        rover.direction = "S";
        console.log("↓ El rover mira al Sur ");
      break;
    case "S":
        rover.direction = "E";
        console.log("→ El rover mira al Este ");
      break;
    case "E":
      rover.direction = "N";
      console.log("↑ El rover mira al Norte");
      break;
  }
}

function turnRight(rover){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case "N":
        rover.direction = "E";
        console.log("→ El rover mira al Este ");
      break;
    case "W":
        rover.direction = "N";
        console.log("↑ El rover mira al Norte");
      break;
    case "S":
        rover.direction = "W";
        console.log("← El rover mira al Oeste");
      break;
    case "E":
        rover.direction = "S";
        console.log("↓ El rover mira al Sur ");
      break;
  }
}

function moveForward(rover){
  console.log("moveForward was called");
  switch (rover.direction) {
    case "W":
        rover.x = rover.x - 1;
        console.log("← el rover Avanza al Oeste");
        console.log(rover.x);
      break;
    case "E":
        rover.x = rover.x + 1;
        console.log("→ El rover Avanza al Este");
        console.log(rover.x);
      break;
    case "N":
        rover.y = rover.y - 1;
        console.log("↑ El rover Avanza al Norte");
        console.log(rover.y);
      break;
    case "S":
        rover.y = rover.y + 1;
        console.log("↓ El rover mira al Sur");
        console.log(rover.y);
      break;
  }
}
