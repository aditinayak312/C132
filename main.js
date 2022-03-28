img="";
objectDetector="";
st="";

function preload(){
img=loadImage("catDog.png");
}

function setup(){
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded(){
    console.log("modelLoaded");
    st="true";
    objectDetector.detect(img,getResult);
}

function getResult(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
}

function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("DOG",45,75);
    noFill();
    stroke("blue");
    rect(40,50,250,300);
    fill("red");
    text("CAT",260,75);
    noFill();
    stroke("blue");
    rect(260,50,250,300);
}
