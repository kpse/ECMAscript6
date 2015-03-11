"use strict";
var __moduleName = (void 0);
require('traceur');
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
function greet(greeting) {
  var name = arguments[$traceurRuntime.toProperty(1)] !== (void 0) ? arguments[$traceurRuntime.toProperty(1)] : "kpse";
  console.log(greeting + ", " + name);
}
greet("hello");
var $__0 = ["111", "1", "1", "1", "1", "222"],
    one = $__0[$traceurRuntime.toProperty(0)],
    six = $__0[$traceurRuntime.toProperty(5)];
console.log(one);
console.log(six);
