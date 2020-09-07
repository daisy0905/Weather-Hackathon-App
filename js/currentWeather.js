function weatherData() { 
    selectElement = document.getElementById("cities");      
    output = selectElement.value; 
    document.getElementById("selectedCity").innerHTML = output;
    
    Cookies.set("selection", output);

    var img = document.createElement("img"); 
    if(output == "Calgary") {
        img.src = "https://www.123dentist.com/wp-content/uploads/2019/07/calgary-alberta.jpg";
    } else if(output == "Toronto") {
        img.src = "https://www.tripsavvy.com/thmb/d5CKyHWMzBgSyKsjH5CqdVul1d4=/1800x1200/filters:fill(auto,1)/toronto-0196f862595c45e498935329f7446859.jpg";
    } else if(output == "Ottawa") {
        img.src = "https://media-cdn.tripadvisor.com/media/photo-s/10/e3/54/f1/ottawa-aerial-view-ottawa.jpg";
    } else if(output == "Vancouver") {
        img.src = "https://res.cloudinary.com/simpleview/image/upload/v1486505969/clients/vancouverbc/Aerial_Sunset_Vancouver_d3_copy_1bb86ed0-1edc-4cda-841d-0b033ca0bb72.jpg";
    } else if(output == "newYork") {
        img.src = "https://www.visittheusa.com/sites/default/files/styles/hero_l_x2/public/images/hero_media_image/2017-05/9dbea438bcd305129064e4a048cc6b52.jpeg?itok=fsRq3wyj";
    } else if(output == "london") {
        img.src = "https://cdn.contexttravel.com/image/upload/c_fill,q_60,w_2600/v1555943130/production/city/hero_image_11_1555943130.jpg";
    } else if(output == "tokyo") {
        img.src = "https://www.japan-guide.com/g18/3009_01.jpg";
    } else if(output == "beijing") {
        img.src = "https://www.brunswickgroup.com/media/2399/shutterstock_244366729.jpg?anchor=center&mode=crop&heightratio=0.5625&width=767&rnd=131871899570000000";
    }
    document.getElementById("city-photo").appendChild(img);
    img.style.width = "100%";
    
    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            let dataGet = JSON.parse(this.responseText);
            console.log(dataGet);
            document.getElementById("description").innerHTML = dataGet.weather.main;
            document.getElementById("temp").innerHTML = dataGet.main.temp_max + "/" + dataGet.main.temp_min;
            document.getElementById("wind-speed").innerHTML = dataGet.wind.speed;
            document.getElementById("humidity").innerHTML = dataGet.main.humidity;
            document.getElementById("pressure").innerHTML = dataGet.main.pressure;
            document.getElementById("feels-like").innerHTML = "Feels like: " + dataGet.main.feels_like;

        } 
    }
    
    var api = "http://api.openweathermap.org/data/2.5/weather?q=";
    var apiKey = "&APPID=2043971c38627691f7165b47ff07db1b";
    var units = "&units=metric";
    var city = output;
    var url = api + city + apiKey + units;
    console.log(url);
    ajax.open("GET", url, true);
    ajax.send();
} 

document.getElementById("submit").addEventListener("click", weatherData);

function pageLink() {
    window.open('pages/5dayForecast.html', '_self');
}

document.getElementById("link").addEventListener("click", pageLink);