var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBox = document.getElementsByClassName("delete");
var h1 = document.querySelector("h1");

function inputLength() {
	return input.value.length;
}

function classLength(){
	return event.target.classList.length;
}

function createListElement() {
	var li = document.createElement("li");
	var newButton = document.createElement("button");
	newButton.setAttribute("class", "delete");
	li.appendChild(document.createTextNode(input.value));
	newButton.appendChild(document.createTextNode("x"));
	ul.appendChild(li);
	li.insertBefore(newButton, li.childNodes[0]);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function lineThroughItem (event){
	if (classLength() === 0){
		event.target.className = "done";
	} else {
		event.target.className = "";
	}
}

function deleteItem(){
	event.target.parentNode.parentNode.removeChild(event.target.parentNode);
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", lineThroughItem);

for (var i = 0; i < deleteBox.length; i++) {
    deleteBox[i].addEventListener('click', deleteItem);
}
