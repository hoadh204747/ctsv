//handle 1
var buttonState_1 = document.getElementById("link1");
var buttonState_2 = document.getElementById("link2");

var div_person = document.getElementById("person");
var div_person2 = document.getElementById("teacher");

buttonState_1.addEventListener("click", function() {
    if (div_person.style.display === "none" || div_person.style.display === "") {
        div_person.style.display = "block";
        div_person2.style.display = "none";
    }
});

buttonState_2.addEventListener("click", function() {
    if (div_person2.style.display === "none" || div_person2.style.display === "") {
        div_person2.style.display = "block";
        div_person.style.display = "none";
    }
});

//handle 2
var buttonList = document.getElementsByClassName("x");
var buttonBox = document.getElementsByClassName("y");

for(var i=0; i<buttonList.length; i++){
    (function (index) {
        buttonList[index].addEventListener("click", function () {
            if (buttonBox[index].style.display === "none" || buttonBox[index].style.display === "") {
                buttonBox[index].style.display = "block";
            }
            for (var j = 0; j < buttonBox.length; j++) {
                if (j !== index) {
                    buttonBox[j].style.display = "none";
                }
            }
        });
    })(i);
}