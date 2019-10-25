let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
const botDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg';
const beachDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg';
const spaceDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg';
numClosedDoors = 3;
let openDoor1 = ;
let openDoor2 =  ;
let openDoor3 = ;
let closedDoorPath = 'https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg';
const isClicked = (door) => {
  if(door.src = closedDoorPath){
    return false;
  }
  else{
    return true;
  }
}
const playDoor = () => {
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver();
  }
}
const randomChoreDoorGenerator = () => {
  const choreDoor = math.floor(Math.random()*numClosedDoors);
  if(choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }
  else if (choreDoor === 1){
   openDoor2 = botDoorPath;
   openDoor1 = spaceDoorPath;
   openDoor3 = beachDoorPath;
  }
  else if (choreDoor === 2){
    openDoor3 = botDoorPath;
    openDoor2 = spaceDoorPath;
    openDoor1 = beachDoorPath;
  }
}
if(!isClicked(doorImage1)){
  doorImage1.onclick = () => {
  doorImage1.src = openDoor1;
  playDoor();
}
}
if(!isClicked(doorImage2)){
  doorImage2.onclick = () => {
  doorImage2.src = openDoor2;
  playDoor();
}
}
if(!isClicked(doorImage3)){
  doorImage3.onclick = () => {
  doorImage3.src = openDoor3;
  playDoor();
}
}
randomChoreDoorGenerator();