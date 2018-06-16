var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

var addElementToBeginningOfArray = ["poptarts", ...chocolateBars]
var destructivelyAddElementToBeginningOfArray = chocolateBars.unshift("poptarts")

var addElementToEndOfArray = [...chocolateBars, "poptarts"]
var destructivelyAddElementToEndOfArray = chocolateBars.push("poptarts")