var database = [
    {
        username:"nvhung2711",
        password:"password",
    }
];

var newsFeed = [
    {
        username:"someone",
        timeline:"blah blah blah",
    },
    {
        username:"another one",
        timeline:"lalalalala",
    },
];

var userNamePrompt = prompt("What is your username?");
var passwordPrompt = prompt("What is your password?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Wrong username or password");
    }
};

signIn(userNamePrompt, passwordPrompt);

var todos = [
    "clean room",
    "brush teeth",
    "excercise",
    "study Javascript",
    "eat healthy",
];

var todosLength = todos.length;

for(var i = 0; i < todosLength; i++) {
    console.log(i);
}

todos.forEach(function(todo) {
    console.log(todo);
})

for(var i = 0; i < todosLength; i++) {
    todos.pop();
}


var counterOne = 0;
while(counterOne <= 10) {
    console.log(counterOne);
    counterOne++;
} //This one checks the while condition then executes the lines inside it

var counterTwo = 10;
do {
    console.log(counterTwo);
    counterTwo--;
} while (counterTwo > 0); //This one executes lines inside do then check the while condition