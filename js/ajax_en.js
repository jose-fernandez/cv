function init(){
	var list=[];
	document.getElementById("submit").addEventListener("click", function(event){
		for (let i=0;i<4;i++){
			list.push(event.currentTarget.parentElement.parentElement[i].value);
		}
    console.log(list);
		loadDoc(list);
	});
}

function loadDoc(list) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      if (this.responseText == "2"){
        document.getElementById("result").innerHTML = "<i class='fa fa-times fa-2x'></i> Not successful";
      }else{
        document.getElementById("result").innerHTML = "<i class='fa fa-check fa-2x'></i> Successful";
      }
    }
  };
  xhttp.open("POST", "php/email.php", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send(`name=${list[0]}&email=${list[1]}&phone=${list[2]}&msg=${list[3]}`);
}

window.onload=function(){
	init();
};