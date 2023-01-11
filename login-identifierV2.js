function logincheck() {
    let entereduname = document.getElementById("username").value;
    let enteredpwd = document.getElementById("password").value;
  
    if (//usernames
	entereduname === "sunny" ||  
	entereduname === "HCI2023" 
	&& 
	//passwords
	enteredpwd === "123" || 
	enteredpwd === "HCI4EVER") {
    window.location = "https://aceclez.github.io/AceChinese/dashboard.html";
    location.reload();
    } else {
	    window.open("https://aceclez.github.io/AceChinese/");
	    alert("incorrect password");
	    window.close();
   }
	
    if (entereduname === "" && enteredpwd === "") {
	    window.open("https://aceclez.github.io/AceChinese/");
	    window.close();
    }	
}
