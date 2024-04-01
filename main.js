let status = ""; 
let video; 

function setup() {
   
    let canvasWidth = 380;
    let canvasHeight = 380;
    let canvasX = (windowWidth - canvasWidth) / 2;
    let canvasY = (windowHeight - canvasHeight) / 2 + 150;
    let cnv = createCanvas(canvasWidth, canvasHeight);
    cnv.position(canvasX, canvasY);
    video = createCapture(VIDEO);
    video.size(canvasWidth, canvasHeight);
    video.hide();
    textAlign(CENTER);
  }
  
  

function start() {

  let inputName = select("#input_name").value(); 
  status = "Status: Detecting Objects";
  select("#model_status").html(status); 

  let options = { confidence: 0.5 };
  objectDetector = ml5.objectDetector('cocossd', options, modelLoaded);
}

function modelLoaded() {
  
  console.log("Model Loaded!"); 
  status = "Model Loaded!";
  select("#model_status").html(status); 
}

function draw() {
 
  image(video, 0, 0, width, height); 
}


