function logincheck() {
    let entereduname = document.getElementById("username").value;
    let enteredpwd = document.getElementById("password").value;
  
    if (entereduname === "sunny" ||  entereduname === "TJNS-GIFT-TRIAL" && enteredpwd === "123" || enteredpwd === "GIFT-JAN") {
    window.location = "https://aceclez.github.io/AceChinese/dashboard.html";
    location.reload();
    } else {
	    window.open("https://aceclez.github.io/AceChinese/");
	    alert("incorrect password");
	    window.close();
   }
	
    if (entereduname === "" && enteredpwd === "") {
	    window.open("https://aceclez.github.io/AceChinese/");
	    alert("incorrect password");
	    window.close();
    }	
}
