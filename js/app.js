function citySelect() { 
    selectElement = document.getElementById("cities");      
    output = selectElement.value; 
    document.getElementById("selectedCity").innerHTML = output;
    
    Cookies.set("selection", output);
}

document.getElementById("submit").addEventListener("click", citySelect);

function pageLink1() {
    window.open('pages/currentWeather.html', '_self');
}

function pageLink2() {
    window.open('pages/5dayForecast.html', '_self');
}

document.getElementById("current-weather").addEventListener("click", pageLink1);

document.getElementById("forecast").addEventListener("click", pageLink2);