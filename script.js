let searchBar = document.getElementById("Search");
let Container = document.getElementById("Container");
let inputfield = document.getElementById("inputField");

searchBar.addEventListener("click", function () {
  var paragraph = document.createElement("p");
  paragraph.innertext = inputfield.value;
  window.open("http://google.com/search?q=" + inputfield.value);
});
