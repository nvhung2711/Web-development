// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let array1 = [];
array.forEach(user => {
  let { username } = user;
  username = username + "!";
  array1.push(username);
});
console.log("array1", array1);

//Create an array using map that has all the usernames with a "? to each of the usernames
let arrayMap = array.map(user => {
  let { username } = user;
  return username + "?";
});
console.log("map", arrayMap);

//Filter the array to only include users who are on team: red
let arrayFiler = array.filter(user => {
  return user.teamm === "red";
});
console.log("filter", arrayFiler);

//Find out the total score of all users using reduce
let total = array.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log(total[total.length() - 1]);

// (1), what is the value of i? index of the array
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	return num * 2;
});

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);