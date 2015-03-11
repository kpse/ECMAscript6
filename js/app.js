require('traceur');

console.log(`${1 + 1}`);

let message = 'hi';

{
  let message = 'bye';
}

console.log(message);

var fs = [];

for (var i = 0; i < 10; i++) {
  fs.push(function () {
    console.log(i);
  })

}

fs.forEach(function (f) {
  f();
});

var arrowGreeting = (message, name) => message + ' ' + name;
console.log(arrowGreeting("hello", 'name'));

function greet(greeting, name = "kpse") {
  console.log(greeting + ", " + name);
}

greet("hello");

var [one,,,,,six] = ["111", "1", "1", "1", "1", "222"];

console.log(one);
console.log(six);
