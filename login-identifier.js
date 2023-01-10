function logincheck() {
    let entereduname = document.getElementById("unameInput").value;
    let enteredpwd = document.getElementById("pwdInput").value;
  
    if (entereduname === "sunny" || enteredpwd === "123") {
    window.location = "https://aceclez.github.io/AceChinese/dashboard.html";
    location.reload();
    } else {
	    window.open("https://aceclez.github.io/AceChinese/");
	    alert("incorrect password");
	    window.close();
   }
}

/*
LOGIN V1
function logincheck() {
    let entereduname = document.getElementById("unameInput").value;
    let enteredpwd = document.getElementById("pwdInput").value;
    let combinedInput = String(entereduname) + String(enteredpwd);
    let securityV1 = String(combinedInput) + String(enteredpwd);
    if (securityV1 === "sunny123123" || "yunxing123123" || "yunzhi123123" || "harkman123123") {
    window.location.replace("https://pw-silkroad.w3spaces.com/dashboard.html");
    alert("correct password");
    } else {
    window.location.replace("https://www.gmail.com");
    alert("incorrect password");
   }
}
*/
/*
LOGIN V2
function logincheck() {
    let entereduname = document.getElementById("unameInput").value;
    let enteredpwd = document.getElementById("pwdInput").value;
    let combinedInput = String(entereduname) + String(enteredpwd);
    if (entereduname === "sunny" && enteredpwd === "123") {
    location.replace("https://pw-silkroad.w3spaces.com/dashboard.html")
;

//if user present variables
var user1000 = 0
var user1002 = 0
var user1003 = 0
var user1004 = 0
//end of data storage
/*
LOGIN V3
function logincheck() {
    //end of login declaring
    let entereduname = document.getElementById("unameInput").value;
    let enteredpwd = document.getElementById("pwdInput").value;
    let combinedInput = String(entereduname) + String(enteredpwd);

    //user 1000 //Sunny
    if (combinedInput === "sunny123") {
    //window.location.href = "https://aceclez.github.io/AceChinese/dashboard.html";
    window.location = "https://aceclez.github.io/AceChinese/dashboard.html";
    location.reload();
    //alert("correct password welcome user");
    } else {
    location.reload();
    alert("incorrect password");
   }
}
*/	

/*
LOGIN V4
function logincheck() {
    //end of login declaring
    let entereduname = document.getElementById("unameInput").value;
    let enteredpwd = document.getElementById("pwdInput").value;

    //user 1000 //Sunny
    if (entereduname === "sunny" && enteredpwd === "123") {
    window.location = "https://aceclez.github.io/AceChinese/dashboard.html";
    location.reload();
    } else {
	    window.open("https://aceclez.github.io/AceChinese/");
	    alert("incorrect password");
	    window.close();
   }
}
*/
