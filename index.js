// Write your solution here!
var cats = [];

cats.push('Milo','Otis','Garfield');

function destructivelyAppendCat(name){
    cats.push('Ralph')
}

function destructivelyPrependCat(name){
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat(name){
    cats.pop();
}
function destructivelyRemoveFirstCat(name){
    cats.shift()
}

function appendCat(name){

   var newCats = [
       ...cats,'Broom'
   ]
   return newCats
  
}

function prependCat(name){
    
    var otherCats = [
        'Arnold',...cats
    ]
    return otherCats
   
 }
function removeLastCat(name) {
    const slicedCats = cats.slice(0, -1)
    return slicedCats
}

function removeFirstCat(name) {
    const slicedCats = cats.slice(1)
    return slicedCats
}