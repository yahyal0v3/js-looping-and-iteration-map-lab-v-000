// Code your solution in this file.
function lowerCaseDrivers(collection) {
  return collection.map(element => element.toLowerCase())
}

function nameToAttributes(collection) {
  return collection.map(element => 
    arrayName = element.split(" ")
    return {firstName: arrayName[0], lastName: arrayName[1]}
  )
}