function setup() {
    createCanvas(400, 400);
    background("#FFC107");
  }
  
  function draw() {
    
    fill("black");
         stroke("white");
    
    if(mouseIsPressed){
  rect(mouseX,mouseY,20,20);
    } 
  }