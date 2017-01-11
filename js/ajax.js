function init(){
	var list=[];
	document.getElementById("submit").addEventListener("click", function(event){
		
		for (let i=0;i<3;i++){
			list.push(event.currentTarget.parentElement.parentElement[i].value);
		}
		loadDoc(list);
	});
}

function loadDoc(list) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
    	console.log(this.responseText);
    	document.getElementById("result").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "ejercicio2.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`date=${list[0]}&cp=${list[1]}&tlf=${list[2]}`);
}

window.onload=function(){
	init();
};