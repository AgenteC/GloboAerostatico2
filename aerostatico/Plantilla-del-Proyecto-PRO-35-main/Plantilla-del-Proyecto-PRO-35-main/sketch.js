var balloon,balloonImage1,balloonImage2;
var balloonPosition
var database
// crea aquí la base de datos y la variable de posición 

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Función para configurar el entorno inicial
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  var balloonPosition=database.ref('balloon/height');
  balloonPosition.on("value",readPosition, showError)

  textSize(20); 
}

// función para mostrar la Interfaz del Usuario (UI por sus siglas en inglés)
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    //escribe el código para mover el globo aerostático en dirección hacia la izquierda
    balloon.x = -3
    balloon.y = 0
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    balloon.x = 3
    balloon.y = 0
    //escribe el código para mover el globo aerostático en dirección hacia la derecha
  }
  else if(keyDown(UP_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,-10)
    balloon.scale=ballon.scale -0.04;
    balloon.x = 0
    balloon.y = -3
    
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    updateHeight(0,-10)
    balloon.scale=balloon.scale -0.01
    balloon.x = 0
    balloon.y = 3

    //escribe el código para mover el globo aerostático en dirección descendente
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**¡Utiliza las teclas de flecha para mover el globo aerostático!",40,40);
}

function readHeight(){

Height = data.val()
balloon.x = height.x,
balloon.y = height.y

}

function showError(){

console.log("Error in writing to the datebase")

}

function updateHeight(){

database.ref('balloon/height').set({
  'x': height.x + x,
  'y': height.y + y
})

}