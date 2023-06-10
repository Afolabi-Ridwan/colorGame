var container = document.getElementById("container");
var boxColor = document.querySelectorAll(".box");

let colors = generateRandomColor(6);

let numSquares = 6;
var pickedColor = random();
let colorPick = document.getElementById("colorPick");
let texts = document.getElementById("texts");
colorPick.textContent = ` ${pickedColor} `;
var decision = document.getElementById("decision");

let easyLevel = document.querySelector("#easy");
let hardLevel = document.getElementById("hard");

var resetButton = document.getElementById("reset");

easyLevel.addEventListener("click", function () {
  hardLevel.classList.remove("colorthis");
  easyLevel.classList.add("colorthis");
  this.style.color = "white";
  hardLevel.style.color = "blueviolet";
  hardLevel.style.padding = "5px";

  numSquares = 3;

  colors = generateRandomColor(numSquares);

  pickedColor = random();

  decision.textContent = "";

  texts.style.backgroundColor = "blueviolet";

  colorPick.textContent = ` ${pickedColor} `;

  for (var i = 0; i < boxColor.length; i++) {
    if (colors[i]) {
      boxColor[i].style.backgroundColor = colors[i];
    } else {
      boxColor[i].style.display = "none";
    }
  }
});

hardLevel.addEventListener("click", function () {
  hardLevel.classList.add("colorthis");
  easyLevel.classList.remove("colorthis");
  this.style.color = "white";
  easyLevel.style.color = "blueviolet";
  easyLevel.style.padding = "5px";

  numSquares = 6;

  colors = generateRandomColor(numSquares);

  texts.style.backgroundColor = "blueviolet";

  pickedColor = random();

  decision.textContent = "";

  colorPick.textContent = ` ${pickedColor} `;

  for (var i = 0; i < boxColor.length; i++) {
    if (colors[i]) {
      boxColor[i].style.backgroundColor = colors[i];
      boxColor[i].style.display = "block";
    }
  }
});

resetButton.addEventListener("click", function () {
  colors = generateRandomColor(numSquares);

  pickedColor = random();

  // resetButton.style.hover.backgroundColor = "blueviolet";
  // resetButton.style.color = "white";
  // resetButton.style.padding = "5px";

  colorPick.textContent = ` ${pickedColor} `;

  texts.style.backgroundColor = "blueviolet";

  resetButton.textContent = "New Color";

  decision.textContent = "";
  for (i = 0; i < boxColor.length; i++) {
    boxColor[i].style.backgroundColor = colors[i];
  }
});

colorPick.textContent = ` ${pickedColor} `;

for (var i = 0; i < boxColor.length; i++) {
  boxColor[i].style.backgroundColor = colors[i];

  boxColor[i].addEventListener("click", function () {
    console.log("clicked");

    this.style.transition = "0.7s";
    var chosenColor = this.style.backgroundColor;
    if (chosenColor === pickedColor) {
      colorPick.textContent = ` ${pickedColor} `;
      decision.textContent = "CORRECT!!!";

      texts.style.backgroundColor = pickedColor;
      texts.style.padding = "40px 0";
      switchColor(pickedColor);

      resetButton.textContent = "Play Again?";
    } else {
      decision.textContent = "WRONG!!!";
      this.style.backgroundColor = "rgb(32, 26, 26)";
    }
  });
}

function switchColor(color) {
  for (i = 0; i < boxColor.length; i++) {
    boxColor[i].style.backgroundColor = color;
    console.log(color);
  }
}

function random() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColor(num) {
  var arr = [];

  for (i = 0; i < num; i++) {
    arr[i] = randomColor();
  }

  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

const box = document.querySelectorAll(".box");
