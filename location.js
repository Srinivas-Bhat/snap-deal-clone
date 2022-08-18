document.querySelector("form").addEventListener("submit",myfunction)


var locationData=JSON.parse(localStorage.getItem("addressDetails")) || []
function myfunction(){
event.preventDefault()
var obj1={
    country:document.querySelector("#country").value,
name1:document.querySelector(".name").value,
mobileno:document.querySelector(".mobno").value,

pincode1:document.querySelector(".pincode").value,

houseno:document.querySelector(".flatno").value,

area:document.querySelector(".area").value,

landmark:document.querySelector(".landmark").value,

city:document.querySelector(".city").value,

state:document.querySelector(".state").value,

mobileno:document.querySelector("#adresstype").value,



}
console.log(obj1)

locationData.push(obj1)
console.log(locationData)
localStorage.setItem("addressDetails",JSON.stringify(locationData))
window.location.href="payment.html"

window.location.href = "payment.html";

}