// function toggleAnswer(answerId) {
//   var answer = document.getElementById(answerId);
//   //   var uparrow = document.getElementsByClassName("temp-question");
//   if (answer.style.display === "none") {
//     // uparrow.classList.add("close");
//     answer.style.display = "block";
//   } else {
//     answer.style.display = "none";
//   }
// }
// debugger;
var acc = document.getElementsByClassName("question");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("close");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
