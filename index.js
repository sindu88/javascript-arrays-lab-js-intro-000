var kittens = ["Milo","Otis","Garfield"] ;//define your array here
function destructivelyAppendKitten(name)
{
  kittens.push(name);
}
// Add your functions and code here
function destructivelyPrependKitten(name)
{
  kittens.shift(name);
}
function destructivelyRemoveLastKitten()
{
  kittens.pop();
}

function destructivelyRemoveFirstKitten()
{
kittens.unshift();
}
function appendKitten(name)
{
var newArray= kittens.concat(name);
return newArray;

}
function prependKitten(name)
{
var new= name+kittens ;
return new;
}


function RemoveLastKitten()
{
  var newArray= kittens.slice(kittens.length-1);
  return newArray
}

function RemoveFirstKitten()
{
  var newArray= kittens.slice(1);
  return newArray;
}
