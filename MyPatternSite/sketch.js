diameter = 100

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, width, 100, 100, 100)

  
  let button = createButton('change pattern');
  
  button.mousePressed(change); 
  
  function change() {
  let size = random(7);

  
  let blendModes = [
    BLEND, // 0
    ADD, // 1
    DARKEST, // 2
    LIGHTEST, // 3
    EXCLUSION,
    MULTIPLY,
    SCREEN,
    REPLACE,
    REMOVE,
    DIFFERENCE,  //2D only
    OVERLAY,     //2D only
    HARD_LIGHT,  //2D only
    SOFT_LIGHT,  //2D only
    DODGE,       //2D only
    BURN,        //2D only
    SUBTRACT     //2D only
  ]
  stroke(random(255), random(255), random(255))
  blendMode(blendModes[0])
  
  background(0, 0, 0)
  let numColumns = floor(width/diameter)
  let circleHDistance = width/numColumns
  let numRows = floor(height/diameter)
  let circleVDistance = height/numRows
  
  for(let x = 0; x < numColumns; x++){
    let circlePosX = x * circleHDistance
    for(let y = 0; y < numRows; y++){
      let circlePosY = y * circleVDistance
      fill(circlePosX, 80, 80, 30)
      rect(circlePosX, circlePosY, diameter*size)
      
    }
  }
  }

}