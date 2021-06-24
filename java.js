var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');


//Function to create a new list element with delete button and "toggle"
function createListElement(textContent) {
    var li = document.createElement("li");
    var deleteButton = document.createElement("button");
    deleteButton.className = "close";
    deleteButton.innerText = "\u00D7";
    deleteButton.addEventListener("click", function () {
        li.remove();
    });
    li.appendChild(document.createTextNode(textContent));
    li.appendChild(deleteButton);
    li.addEventListener("click", function () {
        this.classList.toggle("done");
    });
    ul.appendChild(li);
    input.value = "";
}


    function inputLength() {
		return input.value.length;
    }

    function addToListAfterClick() {
    	 if (inputLength() > 0) {
        createListElement(input.value);
    }
}


	function addToListAfterEnter(event) {
		if (inputLength() > 0 && event.keyCode === 13) {
        createListElement(input.value);
        
    }
}

    function addExampleListElements() {
        var example_tasks = [
        "Bread",
        "Milk",
        "Sugar",
        "Potato",
        "Cabbage",
        "Chocolate",
    ];
    for (var task of example_tasks) {
        createListElement(task);
    }
}

button.addEventListener("click", addToListAfterClick);
input.addEventListener("keypress", addToListAfterEnter);


/* adding example tasks*/
window.onload = addExampleListElements(); 



