//API Code//

var newsTextContainer = document.querySelectorAll('#details-wrapper h1, main');

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
