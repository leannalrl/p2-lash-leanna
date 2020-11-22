//API Code//
var newsTextContainer = document.querySelectorAll('#details-wrapper h3, main');

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult);
        //Code Dealing With The API Data Goes Here

        var city = document.createTextNode(apiResult.name);

        newsTextContainer[0].appendChild(city);

        var forcastMessageText = document.createTextNode(apiResult.weather[0].description);

        newsTextContainer[1].appendChild(forcastMessageText);
    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=33635,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();


//Alert on Click//
function myFunction() {
  alert('We will contact you shortly!');
}


//Sidebar//
function show(){
	document.getElementById('sidebar').classList.toggle('active');
}

//Use Confirm to get confirmation from a user and take appropriate calculations
var ext_link = document.getElementById("external_link");
ext_link.addEventListener("click",
	function(event){
	  var is_sure = confirm("This link will take you to an external page. Are you sure you want to leave?");
	  if (is_sure === false) {
		  event.preventDefault();
		  alert("Okay. You can stay!");
	  }
}, false
);

//Accordian//
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
