document.querySelector("form").addEventListener("submit",pincode)


var enteredpincode=localStorage.getItem("pincode")
function pincode(){
    event.preventDefault()
    var enteredpincode=document.querySelector("#enterpincode").value;
console.log("inside function")

    if(enteredpincode.length=6){
        window.location.href="index.html"
    }

    else{
        alert("Enter a Valid Pincode")
    }
localStorage.setItem("pincode",enteredpincode)

}
