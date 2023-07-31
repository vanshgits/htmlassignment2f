
// delivery option selected
//display address(show1) and hide timming input
function changeContent1() {
  document.getElementById("show1").classList.remove("hide");
  document.getElementById("show2").classList.add("hide");
}

// takeout option selected
// display timming(show2) input and hide address
function changeContent2() {
  document.getElementById("show1").classList.add("hide");
  document.getElementById("show2").classList.remove("hide");
}

