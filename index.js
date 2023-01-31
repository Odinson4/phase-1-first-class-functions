function receivesAFunction(callback) {
  callback(0);
}

function returnsANamedFunction() {
  return returnsANamedFunction;
}
function returnsAnAnonymousFunction() {
  return function () { }
}
