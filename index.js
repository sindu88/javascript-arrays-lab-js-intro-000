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
}

function RemoveFirstKitten()
{
  var newArray= kittens.slice(1);
  return newArray;
}
