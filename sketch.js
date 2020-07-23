var login , hells = 1
var database ,  canvas, password ,   menu , count ;
var enteredPassword ,enteredUsername , enteredNote


function setup() {
  canvas =  createCanvas(displayWidth - 2000 , displayHeight - 3000);
  database = firebase.database();

  login = new Login()
}

function draw() {
  background(0);  
  login.display()
  drawSprites();
}