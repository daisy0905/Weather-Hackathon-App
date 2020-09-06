function weatherData() { 
    selectElement = document.getElementById("cities");      
    output = selectElement.value; 
    document.getElementById("selectedCity").innerHTML = output; 
    
        let ajax = new XMLHttpRequest();
        ajax.onreadystatechange = function() {
            if(this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
                let dataGet = JSON.parse(this.responseText);
                console.log(dataGet);
                for(var i=0; i<41; i++) {
                    document.getElementById("time"+i).innerHTML = dataGet.list[i].dt_txt;
                    document.getElementById("description"+i).innerHTML = dataGet.list[i].weather.description;
                    document.getElementById("temp-max"+i).innerHTML = dataGet.list[i].main.temp_max;
                    document.getElementById("temp-min"+i).innerHTML = dataGet.list[i].main.temp_min;
                    document.getElementById("wind-speed"+i).innerHTML = dataGet.list[i].wind.speed;
                    document.getElementById("humidity"+i).innerHTML = dataGet.list[i].main.humidity;
                }
            } 
        }
    
        var api = "http://api.openweathermap.org/data/2.5/forecast?q=";
        var apiKey = "&APPID=2043971c38627691f7165b47ff07db1b";
        var units = "&units=metric";
        var city = output;
        var url = api + city + apiKey + units;
        console.log(url);
        ajax.open("GET", url, true);
        ajax.send();
} 

document.getElementById("submit").addEventListener("click", weatherData);