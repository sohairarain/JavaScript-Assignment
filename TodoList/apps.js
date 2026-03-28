var arr = JSON.parse(localStorage.getItem("todoList")) || [];

console.log(arr);
var userData = document.getElementById("user-input");
var subButton = document.getElementById("sub-btn");

function userInput() {
  arr.push(userData.value);
  localStorage.setItem("todoList", JSON.stringify(arr));
  userData.value = "";
  subButton.innerHTML = "submit";
  print();
}

function print() {
  var con = document.getElementById("container");
  con.innerHTML = "";

  for (var i = 0; i < arr.length; i++) {
    con.innerHTML += `<li>${arr[i]}<div><button onclick="remove(${i})">delete</button><button onclick="Edit(${i})">Edit</button></div></li>`;
  }
}

function Edit(Enum) {
  var cutLi = arr.splice(Enum, 1);
  userData.value = cutLi;
  //   var replace = arr.splice(Enum , 0 ,cutLi)
  subButton.innerHTML = "update";
  console.log(replace);
  print();
}

function remove(index) {
  var delet = arr.splice(index, 1);
  console.log(index);
  localStorage.setItem("todoList", JSON.stringify(arr));
  print();
}
