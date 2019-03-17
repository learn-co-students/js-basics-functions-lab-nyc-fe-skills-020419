// Code your solution in this file!

const headquartersBlock = 42

const feetPerBlock = 264

function distanceFromHqInBlocks(block) {
  
  return Math.abs(block - headquartersBlock)
  
  
}

function distanceFromHqInFeet(block) {
  
  return distanceFromHqInBlocks(block) * feetPerBlock
  
}

function distanceTravelledInFeet(block1, block2) {
  
  return Math.abs((block1 * feetPerBlock) - (block2 * feetPerBlock))
}

function calculatesFarePrice(start, destination) {
  
  let feetTravelled = distanceTravelledInFeet(start, destination)
  
  if (feetTravelled <= 400) {
    
    return 0 
  } else if (feetTravelled >= 400 && feetTravelled < 2000) {
    return (feetTravelled - 400) * 0.02
  }
  
  else if (feetTravelled > 2000 && feetTravelled <= 2500) {
    return 25
  }
  
  else {
    return 'cannot travel that far' 
  }
}