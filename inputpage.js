
document.querySelector("#loginform").addEventListener("submit", loginEmail)



function loginEmail()
{
    event.preventDefault();
    var value = document.querySelector("#logindata").value;
    console.log(value.length);

    

    localStorage.setItem("inputmail",value);
    

    // var loginArr = [];

   if(value.length<10 || value.length>30)
   {
            document.querySelector("#checkinput").innerText = "Please enter a valid mobile number or email";
            document.querySelector("#logindata").style.border = "0.5px solid red";
   }

   else if(value.length>10 || value.length<30){
       window.location.href = "inputOtp.html";
   }

//    checkmail(value);
   
}




// function myFunction() {
//     const inpObj = document.getElementById("id1");
//     if (!inpObj.checkValidity()) {
//       document.getElementById("demo").innerHTML = inpObj.validationMessage;
//     } else {
//       document.getElementById("demo").innerHTML = "Input OK";
//     } 
//   }


//if(value === "srinivaskbhat0105@gmail.com" || value === "bhavesh@gmail.com" || value === "prem@gmail.com")