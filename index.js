// Write your solution here!
var cats=["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(catname){
    cats.push(catname);
};
function destructivelyPrependCat(catname){
    cats.unshift(catname);
};
function destructivelyRemoveLastCat(catname){ 
    cats.pop(catname)
};
function destructivelyRemoveFirstCat(catname){
    cats.shift(catname)
};
function appendCat(name){
    var newcats=cats.slice();
    newcats.push(name);
    return newcats;

};
function prependCat(name){
    var newcats=cats.slice();
    newcats.unshift(name);
    return newcats;

};
function removeLastCat(name){
    var newcats=cats.slice();
    newcats.pop(name);
    return newcats;

}; 
function removeFirstCat(name){
    var newcats=cats.slice();
    newcats.shift(name);
    return newcats;

};


