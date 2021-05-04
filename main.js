canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
background_image = "race.png";

rover_image = "car.png";
random_number = Math.floor(Math.random ()*4);
console.log(random_number);
car_width = 100;
car_height = 90;
car_x = 10;
car_y = 10;
background_image=race_car_images_array[random_number];
console.log("background_image="+ background_image);
car_image="car.png";
function add() {;
    background_imgTag = new Image(); 
    background_imgTag.onload = uploadBackground; 
    background_imgTag.src = background_image;   

    cra_imgTag = new Image();
    car_imgTag.onload = uploadrover; 
    car_imgTag.src = car_image;  
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadrover() {
    ctx.drawImage(car_imgTag, car_x, car_y, car_width, car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("up");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("down");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("left");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("right");
        }
}

function up()
{
    if(car_y >=0)
    {
        car_y = car_y - 10;
        console.log("When up arrow is pressed,  x = " + car_x + " | y = " +car_y);
         uploadBackground();
         uploadrover();
    }
}
function down()
{
    if(car_y <=500)
    {
        car_y =car_y+ 10;
        console.log("When down arrow is pressed,  x = " + car_x + " | y = " +car_y);
        uploadBackground();
         uploadrover();
    }
}
function left()
{
    if(car_x >= 0)
    {
        car_x =car_x - 10;
        console.log("When left arrow is pressed,  x = " + car_x + " | y = " +car_y);
        uploadBackground();
         uploadrover();
    }
}
function right()
{
    if(car_x <= 700)
    {
        car_x =car_x + 10;
        console.log("When right arrow is pressed,  x = " + car  _x + " | y = " +car_y);
        uploadBackground();
        uploadrover();
    }
}
