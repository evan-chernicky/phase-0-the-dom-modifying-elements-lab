// Write your code here!

const removeMain = document.getElementsByTagName("main")[0];

removeMain.remove();

const newHeader = document.createElement("h1");
const grabBody = document.getElementsByTagName("body")[0];

grabBody.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "YOUR-NAME is the champion";