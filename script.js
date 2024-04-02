// RGB Colors

// Event Listener
document.getElementById("redIn").addEventListener("input", rgbPreview);
document.getElementById("greenIn").addEventListener("input", rgbPreview);
document.getElementById("blueIn").addEventListener("input", rgbPreview);

document.getElementById("width").addEventListener("input", displayPreview);
document.getElementById("height").addEventListener("input", displayPreview);
document.getElementById("display").addEventListener("input", displayPreview);

document.getElementById("blackbtn").addEventListener("click", blackTheme);
document.getElementById("whitebtn").addEventListener("click", whiteTheme);

// Event Function
function rgbPreview() {
  // Input: get red green blue values
  let rValue = +document.getElementById("redIn").value;
  let gValue = +document.getElementById("greenIn").value;
  let bValue = +document.getElementById("blueIn").value;

  // Validate Colors (Constrain colors)
  if (rValue < 0) {
    rValue = 0;
    document.getElementById("redIn").value = 0;
  } else if (rValue > 255) {
    rValue = 255;
    document.getElementById("redIn").value = 255;
  }

  if (gValue < 0) {
    gValue = 0;
    document.getElementById("greenIn").value = 0;
  } else if (gValue > 255) {
    gValue = 255;
    document.getElementById("greenIn").value = 255;
  }

  if (bValue < 0) {
    bValue = 0;
    document.getElementById("blueIn").value = 0;
  } else if (bValue > 255) {
    bValue = 255;
    document.getElementById("blueIn").value = 255;
  }

  // Process: build rgb string and update the color preview
  let rgbString = `rgb(${rValue}, ${gValue}, ${bValue})`;
  console.log(rgbString);

  // Output: display rgb string and update the color preview
  document.getElementById("rgbStrOut").innerHTML = rgbString;
  document.getElementById("display").style.background = rgbString;
}

// Event Function
function displayPreview() {
  // Input
  let height = +document.getElementById("height").value;
  let width = +document.getElementById("width").value;

  // Constrains
  if (height < 50) {
    height = 50;
    document.getElementById("height").value = 0;
  } else if (height > 400) {
    height = 400;
    document.getElementById("height").value = 400;
  }

  if (width < 50) {
    width = 50;
    document.getElementById("width").value = 0;
  } else if (width > 400) {
    width = 400;
    document.getElementById("width").value = 400;
  }

  // Process & Output
  document.getElementById("display").style.width = `${width}px`;
  document.getElementById("display").style.height = `${height}px`;

  console.log(height);
  console.log(width);
}

// Event Function
function whiteTheme() {
  document.getElementById("body").style.background = `white`;
  document.getElementById("body").style.color = `black`;
}

function blackTheme() {
  document.getElementById("body").style.background = `black`;
  document.getElementById("body").style.color = `white`;
}
