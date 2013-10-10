var extractBoundary = require("../boundary-3d")

//Make a cube
var cube = extractBoundary([
  [ 1, 0, 0, 1],
  [-1, 0, 0, 1],
  [ 0, 1, 0, 1],
  [ 0,-1, 0, 1],
  [ 0, 0, 1, 1],
  [ 0, 0,-1, 1]
])

console.log(cube)