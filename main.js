// For each of the following code snippets:

// identify any hoisting-related behaviors
// describe the bug or confusion the behavior(s) might cause
// rewrite the code to remove the hoisting issue(s)


// EXERCISE 1

// var myObj = { class: [] };
// var className = 'animating';

// function animateLeft(obj) {
//     obj.class.push(className);
//     var className = 'left';
//     obj.class.push(className);
// }

// animateLeft(myObj);

// initial push within function will evaluate to undefined, as the local var className
// declaration will be hoisted above it (sans assignment). 
// The global var className should be nested in animateLeft function
// above the initial push.

var myObj = { class: [] };


function animateLeft(obj) {
    var className = 'animating';
    obj.class.push(className);
    var className = 'left';
    obj.class.push(className);
}

animateLeft(myObj);


// EXERCISE 2

// var unit = 'F';

// function formatTemp(temp, celcius) {
//     if (celcius) {
//         var unit = 'C';
//     } 

//     return temp + '&deg;' + unit;
// }

// var temp = formatTemp(99);

// console.log(temp);

// var unit is declared inside the function formatTemp and assigned the value of 'C' 
// only if celcius is true. The variable is undefined if celcius is false.

function formatTemp(temp, celcius) {
    if (celcius) {
        var unit = 'C';
    } else {
    	var unit = 'F';
    }

    return temp + '&deg;' + unit;
}

var temp = formatTemp(99);

// console.log(temp);

// EXERCISE 3

// var update = true;
// var a = 0;

// function increment() {
//     if (update === false) {
//         return;
//     }

//     function update() {
//         a++;

//         if (a >= 10) {
//             update = false;
//         }
//     }

//     update();
// }

// for (var i = 0; i < 50; i++) {
//     increment();
// }

// console.log(a);


// Because the incrementation of 'a' within the function update declaration and assignment
// came before the conditional statement that turned off update when it reached 10,
// 'a' continued to incrememnt within the condition of the for loop.

var update = true;
var a = 0;

function increment() {
    if (update === false) {
        return;
    }

    function update() {
        // a++;

        if (a >= 10) {
            update = false;
        } else {
        	a++;
        }
    }

    update();
}

for (var i = 0; i < 50; i++) {
    increment();
}

// console.log(a);

// EXERCISE 4

// function outer() {
//     return inner();
//     function inner() { return 'Hello'; }
// }

// console.log(outer());

// This code works fine, however the function should be assigned before 
// calling it.

function outer() {
    function inner() { return 'Hello'; }
    return inner();   
}

// console.log(outer());

// EXERCISE 5

// logTime();

// var logTime = function logTime () {
//     var date = new Date();
//     console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
// }

// The function is not getting hoisted to the top because it is being assigned to a variable.
// It is hoisted within the variable logTime, but not globaly. Moving logTime(); after 
// the variable and function assignments will allow it to run. Otherwise you can remove the variable
// assignment.

logTime();

function logTime () {
    var date = new Date();
    console.log('The time is ' + date.getHours() + ':' + date.getMinutes());
}








