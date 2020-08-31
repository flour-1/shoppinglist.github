var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
// var li = document.querySelectorAll("li");
var buttonDelete = document.getElementsByClassName();
function inputLength(){
	return input.value.length;
}

function createListElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}
function addList(){
	if (inputLength() > 0) {
	createListElement();
   }
}
ul.addEventListener("click", function(){
	var li = document.querySelector("ul").classList.toggle("done");

})
buttonDelete.addEventListener("click", function(delete){
	
})
function addlistAfterKeypress(event){
	if (inputLength() > 0 && event.keyCode === 13) {
	createListElement();
   }
}
button.addEventListener("click", addList);

input.addEventListener("keypress", addlistAfterKeypress);






































































































// var button = document.getElementById("enter");
// var input = document.getElementById("userinput");
// var ul = document.querySelector("ul");

// var li = document.querySelector("ul").classList.toggle("done");
// // var tick = 1;
// // function AddClass(){
// // 	if (tick === 1)
// // 	document.querySelector("div").classList.toggle("done")
// // }
// function inputLength(){
// 	return input.value.length;
// }
// function createListElement(){

// 		var li = document.createElement("li");
// 	li.appendChild(document.createTextNode(input.value));
// 	ul.appendChild(li);
// 	input.value ="";
// }

// function AddAfterClick() {
// 	if (inputLength() > 0){
// 		createListElement();
//        }
// }
// function addAfterKeypress(event){
// 	if (inputLength() > 0 && event.keyCode === 13)
// 	{
// 		createListElement();
// 	}
	
// }
// button.addEventListener("click", AddAfterClick);

// input.addEventListener("keypress", addAfterKeypress);