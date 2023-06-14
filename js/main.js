var buttons = document.querySelectorAll(".qus");
var answer = document.querySelectorAll(".ans");

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        var link = button.nextElementSibling.classList.contains("view");
        answer.forEach(function (ans) {
            ans.classList.remove("view");
        })
        if (link == true) {
            button.nextElementSibling.classList.remove("view");
            button.firstChild.nextElementSibling.nextElementSibling.style.transform = "rotate(360deg)";
        }
        else {
            button.nextElementSibling.classList.add("view");
            button.firstChild.nextElementSibling.nextElementSibling.style.transform = "rotate(180deg)";
        }
    })
})

