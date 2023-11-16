"use strict";

// console.log(mountainsArray);

//get html elements
const mountainsList = document.getElementById("mountainsList");
const mountainsTableBody = document.getElementById("mountainsTableBody");
const mountainsTable = document.getElementById("mountainsTable");
const articleStyle = document.getElementById("articleStyle");
const imagesDiv = document.getElementById("imageMountain");

//create functions
function loadMountainsList() {
  for (const mountainName of mountainsArray) {
    let option = document.createElement("option");
    option.innerText = mountainName.name;
    // option.value = mountainName;
    mountainsList.appendChild(option);
  }
}
function loadMountainsTable() {
  mountainsTableBody.innerHTML = "";
  imagesDiv.innerHTML = "";
  articleStyle.style.display = "none";
  const id = mountainsList.value;

  if (id) {
    mountainsTable.style.display = "block";
    imagesDiv.style.display = "block";
    articleStyle.style.display = "block";
  } else {
    mountainsTable.style.display = "none";
  }
  for (const mountain of mountainsArray) {
    let coords = mountain.coords;
    if (mountain.name == id) {
      let row = mountainsTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = mountain.name;
      let cell2 = row.insertCell(1);
      cell2.innerText = mountain.elevation;
      let cell3 = row.insertCell(2);
      cell3.innerText = mountain.effort;
      let cell4 = row.insertCell(3);
      cell4.innerText = mountain.img;
      let cell5 = row.insertCell(4);
      cell5.innerText = mountain.desc;
      let cell6 = row.insertCell(5);
      cell6.innerText = coords.lat;
      let cell7 = row.insertCell(6);
      cell7.innerText = coords.lng;
      
      let image = document.createElement("img");
      
      image.src = `images/${mountain.img}`;
      
      image.alt = mountain.name;

      imagesDiv.appendChild(image);
     }
  }
}

//wire-up functions

mountainsList.onchange = loadMountainsTable;
loadMountainsList();
selectMountains();
