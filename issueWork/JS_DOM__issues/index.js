const body = document.querySelector("body");
body.style.background = "black";
const listElement = document.createElement("ul");
listElement.innerText = "The red pill or the blue pill?";
body.append(listElement);
const redButton = document.createElement("button");
redButton.id = "red";
redButton.innerText = "Red pill";
const blueButton = document.createElement("button");
blueButton.id = "blue";
blueButton.innerText = "Blue pill";
body.append(blueButton);
body.append(redButton);
const ul = document.querySelector("ul");
function addListItem() {
  const item = document.createElement("li");
  ul.append(item);
}
const listItems = document.querySelector("li");
function removeListItem() {
  const child = ul.getElementsByTagName("li")[0];
  if (!child) return;
  ul.removeChild(child);
}
document.getElementById("red").addEventListener("click", addListItem);
document.getElementById("blue").addEventListener("click", removeListItem);

ul.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target !== e.currentTarget) {
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
  }
});
