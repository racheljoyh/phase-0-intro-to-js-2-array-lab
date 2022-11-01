// Write your solution here!

let cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat () {
  cats = cats.push('Ralph');
  return cats
}

function destructivelyPrependCat () {
  cats = cats.unshift('Bob');
  return cats;
}