// Original String
let originalString = ["1 ) Faisalabad&nbsp;&nbsp; 2) Lahore&nbsp;&nbsp; 3) Karachi&nbsp;&nbsp; 4) Islamabad&nbsp;&nbsp; 5) Toba Tek Singh&nbsp;&nbsp;  6) Gojra&nbsp;&nbsp; 7) Kashmir"]
document.getElementById("string").innerHTML = originalString
// Simple Alert
function simpleAlert(){
    let alertBtn = "This is simple alert button"
    alert(alertBtn)
    document.getElementById("output").innerHTML = alertBtn
}
// Print My Name
function printMyName(){
    let myName = document.getElementById("inputText").value
    if(myName===""){
        document.getElementById("output").innerHTML = ""
        alert("Please enter your name")
        return;
    }
    document.getElementById("output").innerHTML = myName
}
// Print All Cities
function printAllCities(){
    document.getElementById("output").innerHTML = ""
    let cities = ["Faisalabad ", " Lahore ", " Karachi ", " Islamabad ", " Toba Tek Singh ", " Gojra ", " Kashmir "]
    for(let i=0;i<cities.length;i++){
        let num = i + 1
        document.getElementById("output").innerHTML += num + ") " + cities[i] + "<br>" 
    }
}
// Add Your City in List
function addYourCity(){
    document.getElementById("output").innerHTML = ""
    let cities = ["Faisalabad ", " Lahore ", " Karachi ", " Islamabad ", " Toba Tek Singh ", " Gojra ", " Kashmir "]
    let yourCity = document.getElementById("inputText").value
    if(yourCity===""){
        alert("Please enter your city name")
        return
    }
    cities.push(yourCity)
    for(let i=0;i<cities.length;i++){
        let num = i + 1
        document.getElementById("output").innerHTML += num + ") " + cities[i] + "<br>" 
    }
}
// Generate a Table
function generateTable(){
    document.getElementById("output").innerHTML = ""
    let num = document.getElementById("inputText").value
    if(num===""){
        alert("Please give a number whose table want to calculate!")
        return
    }
    let givenNum = prompt("Please give a limit number!")
    for(let i=1;i<=givenNum;i++){
        let table = num + " X " + i + " = " + num*i
        document.getElementById("output").innerHTML += table + "<br>"
    }
}
// Clear Output
function clrOutput(){
    document.getElementById("output").innerHTML = ""
}
// Clear Input Text
function clrInputText(){
    let inputText = document.getElementById("inputText").value = ""
    document.getElementById("inputText").value = inputText
}