const brooklyn = document.getElementById('Brooklyn1');

brooklyn.addEventListener("click", ()=> {

let complaints = document.getElementById("numofcomplaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BROOKLYN"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}



)})


const manhattan = document.getElementById('Manhattan1');

manhattan.addEventListener("click", ()=> {

let complaints = document.getElementById("numofcomplaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=MANHATTAN"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}



)})

const queens = document.getElementById('Queens1');

queens.addEventListener("click", ()=> {

let complaints = document.getElementById("numofcomplaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=QUEENS"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}



)})
const bronx = document.getElementById('Bronx1');

bronx.addEventListener("click", ()=> {

let complaints = document.getElementById("numofcomplaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=BRONX"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}



)})
const statenisland = document.getElementById('StatenIsland1');

statenisland.addEventListener("click", ()=> {

let complaints = document.getElementById("numofcomplaints").value
 complaints = Number(complaints) || 10
const url="https://data.cityofnewyork.us/resource/erm2-nwe9.json?borough=STATEN ISLAND"
fetch(url)
.then(res=>res.json())
.then((filtereddata)=> {
  console.log('its working');

const data1=document.getElementById("data")
for (let i=0; i <complaints; i++) {
data1.innerHTML += "<li>" + JSON.stringify(filtereddata[i]) + "</li>" }})
 
.catch((error) => {
console.log(error)
}

)})
