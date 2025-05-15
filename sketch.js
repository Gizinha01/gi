   function setup() {
     createCanvas(400,400);
   }
    

function draw() {
  background('#8BC34A');
  fill('#E91E63');
  stroke(100);
  strokeWeight(4);
  circle(200, 200, 300); // rosto
  fill('white');  
  stroke('#000000');
  strokeWeight(1);
  circle(150, 150, 60); // olho esquerdo
  circle(250, 150, 60); // olho direito
       
       olhoX = map(mouseX, 0, 400, 125, 170)
       olhoY = map(mouseY, 0,400, 125, 170)
       
       circle(olhoX, olhoY , 10)
       circle(olhoX+100, olhoY , 10)
       
       
       
  stroke('rgb(0,0,0)');  
  strokeWeight(4);
  line(150, 270, 250, 235); // boca
  fill('#3F51B5');
  stroke('#000000');
  strokeWeight(1); 
  triangle(200, 180, 170, 220, 220, 220); // nariz
  strokeWeight(4);
  line(123,115,178,113); // sobrancelha esquerda
  line(225,116,279,106); // sobrancelha direita
  stroke(0); 
  strokeWeight(1);
  //circle(150, 150, 10); // pupila esquerda
  //circle(250, 150, 10); // pupila direita

       
       
    
    if(mouseIsPressed){
        console.log(mouseX,mouseY);
    }
}

