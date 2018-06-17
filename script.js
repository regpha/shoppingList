var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deleteBox = document.getElementsByClassName("delete");
// var liItems = document.querySelectorAll("li");
var h1 = document.querySelector("h1");



function inputLength() {
	return input.value.length;
}

function classLength(){
	return event.target.classList.length;
}

function buttonsLength(){

}

function createListElement() {
	var li = document.createElement("li");
	var newButton = document.createElement("button");
	newButton.className = "delete";
	li.appendChild(document.createTextNode(input.value.padStart(10)));
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
		if(event.target.classList.contains("delete")){
			event.target.parentNode.parentNode.removeChild(event.target.parentNode);
		}	else	if (classLength() === 0){
		event.target.className = "done";
	} else {
		event.target.className = "";
	}
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", lineThroughItem);
