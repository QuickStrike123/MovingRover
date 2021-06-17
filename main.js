Canvas = document.getElementById("myCanvas");

ctx = Canvas.getContext("2d");

rover_width = 100;

rover_height = 100;

rover_x = 10;

rover_y = 10;

rover_image = "rover.png" ;

NasaMarsImageArray = ["image.jpeg","image1.jpeg","image3.jpeg","image4.jpeg","image5.jpeg"];

RandomNumber = Math.floor(Math.random()* 5);

console.log(RandomNumber);

background_image_canvas = NasaMarsImageArray[RandomNumber];

function add() {

    background_image = new Image();

    background_image.onload = UploadBackground;

    background_image.src = background_image_canvas;

    Rover_image = new Image();

    Rover_image.onload = UploadRover;

    Rover_image.src = rover_image;
    
}

function UploadBackground() {

    ctx.drawImage(background_image , 0 , 0 , Canvas.width , Canvas.height);
    
}

function UploadRover() {

    ctx.drawImage(Rover_image , rover_x , rover_y , rover_width , rover_height);
    
}

window.addEventListener("keydown" , My_KeyDown);

function My_KeyDown(e) {

    var keyPressed = e.keyCode;

    console.log(keyPressed);

    if (keyPressed == "38") {

        up();

        console.log("up");
        
    }

    if (keyPressed == "40") {

        down();

        console.log("down");
        
    }

    if (keyPressed == "37") {

        left();

        console.log("left");
        
    }

    if (keyPressed == "39") {

        right();

        console.log("right");
        
    }
    
}

function up() {

    if (rover_y >= 0) {

        rover_y = rover_y - 10;

        console.log("When Up Arrow Is Pressed , X = " + rover_x + " Y = " + rover_y);
        
        UploadBackground();

        UploadRover();

    }
    
}

function down() {

    if (rover_y <= 500) {

        rover_y += 10;

        console.log("When Down Arrow Is Pressed , X = " + rover_x + " Y = " + rover_y);
        
        UploadBackground();

        UploadRover();

    }
    
}

function left() {

    if (rover_x >= 0) {

        rover_x -= 10;

        console.log("When Left Arrow Is Pressed , X = " + rover_x + " Y = " + rover_y);
        
        UploadBackground();

        UploadRover();

    }
    
}

function right() {

    if (rover_x <= 700) {

        rover_x += 10;

        console.log("When Right Arrow Is Pressed , X = " + rover_x + " Y = " + rover_y);
        
        UploadBackground();

        UploadRover();

    }
    
}