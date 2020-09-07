function weatherData() { 
    var output = Cookies.get("selection");
    cityValue = document.getElementById("selectedCity");
    if(output == "Calgary") {
        cityValue.innerHTML = "Calgary";
    } else if(output == "Toronto") {
        cityValue.innerHTML = "Toronto";
    } else if(output == "Ottawa") {
        cityValue.innerHTML = "Ottawa";
    } else if(output == "Vancouver") {
        cityValue.innerHTML = "Vancouver";
    } else if(output == "NewYork") {
        cityValue.innerHTML = "New York";
    } else if(output == "London") {
        cityValue.innerHTML = "London";
    } else if(output == "Tokyo") {
        cityValue.innerHTML = "Tokyo";
    } else if(output == "Beijing") {
        cityValue.innerHTML = "Beijing";
    }
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

document.getElementById("getData").addEventListener("click", weatherData);