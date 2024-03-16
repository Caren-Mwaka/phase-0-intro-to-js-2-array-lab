
function initializeCats() {
    return ["Milo", "Otis", "Garfield"];
}
let cats = initializeCats();
console.log(cats);

function destructivelyAppendCat(name) {
    cats.push(name);
}
destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(name) {
    cats.unshift(name);
}
destructivelyPrependCat("Bob");
console.log(cats);

function destructivelyRemoveLastCat() {
    cats.pop();
}
destructivelyRemoveLastCat();
console.log(cats);

function destructivelyRemoveFirstCat() {
    cats.shift();
}
destructivelyRemoveFirstCat();
console.log(cats);


function appendCat(name) {
    return [...cats, name];
}
const newCatsAfterAppend = appendCat("Broom");
console.log(newCatsAfterAppend);
console.log(cats);

function prependCat(name) {
    return [name, ...cats];
}
const newCatsAfterPrepend = prependCat("Arnold");
console.log(newCatsAfterPrepend);
console.log(cats);

function removeLastCat() {
    return cats.slice(0, -1);
}
const newCatsAfterRemoveLast = removeLastCat();
console.log(newCatsAfterRemoveLast);
console.log(cats);


function removeFirstCat() {
    return cats.slice(1);
}
const newCatsAfterRemoveFirst = removeFirstCat();
console.log(newCatsAfterRemoveFirst);
console.log(cats);
















