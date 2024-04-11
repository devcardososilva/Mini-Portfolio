function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Adicione este código para permitir a edição de CSS
function changeStyle() {
  var css = document.getElementById("css").value;
  var style = document.createElement("style");
  style.type = "text/css";
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);
}