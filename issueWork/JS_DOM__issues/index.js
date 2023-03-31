const body = document.querySelector("body");

const listElement = document.createElement("ul");
listElement.innerText = "The red pill or the blue pill?";
body.append(listElement);

const redButton = document.createElement("button");
redButton.id = "red";
redButton.innerText = "Red pill";

const blueButton = document.createElement("button");
blueButton.id = "blue";
blueButton.innerText = "Blue pill";

body.append(blueButton, redButton);

const ul = document.querySelector("ul");

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

document.getElementById("red").addEventListener("click", removeListItem);
document.getElementById("blue").addEventListener("click", addListItem);


