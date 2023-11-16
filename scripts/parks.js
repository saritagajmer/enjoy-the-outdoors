const nationalParkTableBody = document.getElementById("nationalParkTableBody");
const nationalParkTable = document.getElementById("nationalParkTable");
const statesList = document.getElementById("statesList");
const parkTypeList = document.getElementById("parkTypeList");

// radio button
const statesRadio = document.getElementById("statesRadio");
const typeRadio = document.getElementById("typeRadio");
const allRadio = document.getElementById("allRadio");

const labelForStates = document.getElementById("labelForStates");
const labelForType = document.getElementById("labelForType");

function loadNationalParkTable() {
  nationalParkTableBody.innerHTML = "";
  const state = allRadio.value;
  if (state) {
    nationalParkTable.style.display = "block";
    labelForType.style.display = "none";
    parkTypeList.style.display = "none";
    labelForStates.style.display = "none";
    statesList.style.display = "none";
  } else {
    nationalParkTable.style.display = "none";
  }
  for (const parks of nationalParksArray) {
    let row = nationalParkTableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = parks.LocationName;

    let cell2 = row.insertCell(1);
    cell2.innerText = parks.Address;

    let cell3 = row.insertCell(2);
    cell3.innerText = parks.City;

    let cell4 = row.insertCell(3);
    cell4.innerText = parks.State;

    let cell5 = row.insertCell(4);
    cell5.innerText = parks.ZipCode;

    let cell6 = row.insertCell(5);
    cell6.innerText = parks.Phone;

    if (parks.Visit) {
      var link = document.createElement("a");
      let cell7 = row.insertCell(6);
      link.href = parks.Visit;
      link.innerText = parks.LocationName;
      cell7.appendChild(link);
    }
  }
}
function loadNationalParkTableByStateName() {
  nationalParkTableBody.innerHTML = "";

  const state = statesList.value;

  if (state) {
    nationalParkTable.style.display = "block";
  } else {
    nationalParkTable.style.display = "none";
  }
  const stateName = statesList.value;
  for (const park of nationalParksArray) {
    if (park.State == stateName) {
      let row = nationalParkTableBody.insertRow(-1);
      let cell1 = row.insertCell(0);
      cell1.innerText = park.LocationName;
      let cell2 = row.insertCell(1);
      cell2.innerText = park.Address;
      let cell3 = row.insertCell(2);
      cell3.innerText = park.City;
      let cell4 = row.insertCell(3);
      cell4.innerText = park.State;
      let cell5 = row.insertCell(4);
      cell5.innerText = park.ZipCode;
      let cell6 = row.insertCell(5);
      cell6.innerText = park.Phone;
      if (park.Visit) {
        var link = document.createElement("a");
        let cell7 = row.insertCell(6);
        link.href = park.Visit;
        link.innerText = park.LocationName;
        cell7.appendChild(link);
      }
      console.log(park);
    }
  }
}
// park type
function loadNationalParkTableByParkType() {
  nationalParkTableBody.innerHTML = "";

  const state = parkTypeList.value.toLocaleLowerCase();
  var parkArrayFiltered = nationalParksArray.filter((e) => e.LocationName.toLocaleLowerCase().includes(state));

  if (state) {
    nationalParkTable.style.display = "block";
  } else {
    nationalParkTable.style.display = "none";
  }

  for (const park of parkArrayFiltered) {
    let row = nationalParkTableBody.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.innerText = park.LocationName;
    let cell2 = row.insertCell(1);
    cell2.innerText = park.Address;
    let cell3 = row.insertCell(2);
    cell3.innerText = park.City;
    let cell4 = row.insertCell(3);
    cell4.innerText = park.State;
    let cell5 = row.insertCell(4);
    cell5.innerText = park.ZipCode;
    let cell6 = row.insertCell(5);
    cell6.innerText = park.Phone;
    if (park.Visit) {
      var link = document.createElement("a");
      let cell7 = row.insertCell(6);
      link.href = park.Visit;
      link.innerText = park.LocationName;
      cell7.appendChild(link);
    }
    console.log(park);
  }
}

//write functions
function loadStatesList() {
  for (const stateName of locationsArray) {
    let option = document.createElement("option");
    option.textContent = stateName;
    // option.value = stateName;
    statesList.appendChild(option);
  }
}
function loadParkTypeList() {
  for (const parkType of parkTypesArray) {
    let option = document.createElement("option");
    option.textContent = parkType;
    option.value = parkType;
    parkTypeList.appendChild(option);
  }
}

// function statesListChanged() {
// const stateName = statesList.value;
// console.log(stateName);
// loadNationalParkTableByStateName(stateName);
// }

// functions for radio button to hide
function parkTypeSelectorStates() {
  const stateRadio = statesRadio.value;

  if (stateRadio) {
    labelForStates.style.display = "block";
    statesList.style.display = "block";
    labelForType.style.display = "none";
    parkTypeList.style.display = "none";
    nationalParkTable.style.display = "none";
  } else {
    labelForStates.style.display = "none";
    statesList.style.display = "none";
  }
}
// show functions for type
function parkTypeSelectorType() {
  const type = typeRadio.value;

  if (type) {
    labelForType.style.display = "block";
    parkTypeList.style.display = "block";
    labelForStates.style.display = "none";
    statesList.style.display = "none";
    nationalParkTable.style.display = "none";
  } else {
    labelForType.style.display = "none";
    parkTypeList.style.display = "none";
  }
}
// show functions for states

//wire-up functions that was created in the last step
statesList.onchange = loadNationalParkTableByStateName;
parkTypeList.onchange = loadNationalParkTableByParkType;

loadStatesList();
loadParkTypeList();

statesRadio.onclick = parkTypeSelectorStates;

typeRadio.onclick = parkTypeSelectorType;

allRadio.onclick = loadNationalParkTable;
