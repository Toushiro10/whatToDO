var button = document.getElementById("enter"); 
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');
var close = document.getElementsByClassName("close")
var existedLi = document.getElementsByTagName("li");
var close = document.getElementsByClassName("close")
var li1 = document.querySelectorAll("li");
var i;


//create delete button to existed list
for (i = 0; i < existedLi.length; i++) {
  var delBut = document.createElement("button");
  delBut.innerText = "\u00D7";
  delBut.className = "close";
  existedLi[i].appendChild(delBut);
  delBut.addEventListener("click", function() {
			i.remove});
 }

//click on the delete button of existd list
for(i=0; i<close.length; i++) {
	close[i].onclick = function() {
		var div = this.parentElement;
		div.style.display = "none";
			}
	}

//toggle the existed list line
li1.forEach(function (li) {
	li.addEventListener("click", function(){
	li.classList.toggle("done");
	})
})


//function to create new element after input + create a del button + make a toggle for the created element
function createListElement() {
	var li = document.createElement("li");
	var btn = document.createElement("button");
		btn.innerText = "\u00D7";		
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
		li.appendChild(btn);
		btn.className = "close";
		btn.addEventListener("click", function() {
			li.remove()});
		li.addEventListener("click", function(){
		li.classList.toggle("done");})
		input.value = "";
}

function inputLength() {
	return input.value.length;
}


function addToListAfterClick() {
	if (inputLength()>0) {
		createListElement()
	}
}

function addToListAfterEnter(event) {
	if (inputLength()>0 && event.keyCode === 13) {
		createListElement()
	}
}


button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterEnter);

