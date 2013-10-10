convex-boundary-3d
==================
Given a collection of 3D planes constructs the set of polygons representing their boundary.

## Install

    npm install convex-boundary-3d

## Example

```javascript
var extractBoundary = require("convex-boundary-3d")

//Make a cube
var cube = extractBoundary([
  [ 1, 0, 0, 1],
  [-1, 0, 0, 1],
  [ 0, 1, 0, 1],
  [ 0,-1, 0, 1],
  [ 0, 0, 1, 1],
  [ 0, 0,-1, 1]
])
```

## API

### `require("convex-boundary-3d")(planes)`
Computes the boundary formed by the intersection of some number of halfspaces in 3D

* `planes` is a list of planes

**Returns** A list of polygons encoding the boundary of the planes

## Credits
(c) 2013 Mikola Lysenko. MIT License