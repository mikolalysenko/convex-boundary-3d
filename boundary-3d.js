"use strict"

var planeToPoly = require("plane-to-polygon")
var splitPolygon = require("split-polygon").positive

module.exports = extractBoundary

function extractBoundary(planes) {
  var result = []
outer:
  for(var i=0; i<planes.length; ++i) {
    var ply = planeToPoly(planes[i], 4)
    for(var j=0; j<planes.length; ++j) {
      if(j === i) {
        continue
      }
      ply = splitPolygon(ply, planes[j])
      if(ply.length < 3) {
        continue outer
      }
    }
    result.push(ply)
  }
  return result
}