"use strict";
var __moduleName = (void 0);
console.log(("" + (1 + 1)));
var message = 'hi';
{
  try {
    throw undefined;
  } catch (message) {
    message = 'bye';
  }
}
console.log(message);
var fs = [];
for (var i = 0; i < 10; i++) {
  fs.push(function() {
    console.log(i);
  });
}
fs.forEach(function(f) {
  f();
});
var arrowGreeting = (function(message, name) {
  return message + ' ' + name;
});
console.log(arrowGreeting("hello", 'name'));
