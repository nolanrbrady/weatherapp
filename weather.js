 /*
   What will we be using?
   
   **Geolocation API**
    http://ip-api.com/json
    
   **Weather API**
    https://fcc-weather-api.glitch.me/api/current?lat=45&lon=145
   */

//Getting Long and Lat
    var x = document.getElementById('alert');
    var town;
    fetch('http://ip-api.com/json')
    .then(function(request){
        return request.json();
    }).then(function(data){
        longitude = data.lon;
        latitude = data.lat;
        town = data.city;
        state = data.region;
        x.innerHTML = "Longitude: " + longitude + "<br>Latitude: " + latitude + "<br>City: " + town + ", " + state;
        var lat = data.lat;
        var long = data.lon;
        return lat,long;
    }).catch(function(error){
        document.getElementById('errorMessage').innerHTML = "There was an error: " + error;
    }); 
    
    //document.getElementById('btn').innerHTML = lat; //Testing the global var
//Initiating the weather api

     //var url = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long;  
    var url = 'https://fcc-weather-api.glitch.me/api/current?lat=40.015&lon=-105.2706';
    var currentTemp;
    var highTemp;
    var lowTemp;
    var description;
    var sunset;
    var sunrise;
    var windSpeed;
    fetch(url)
    .then(function(request){
        return request.json();
    })
    .then(function(data){
        description = data.weather[0].description;
        currentTemp = data.main.temp;
        highTemp = data.main.temp_max;
        lowTemp = data.main.temp_min;
        sunset = data.sys.sunset;
        sunrise = data.sys.sunrise;
        windSpeed = data.wind.speed;
        
        //converting the Temps from Celcius to Farenheit
        
        function cToF(val){
            return Math.round(val * 9/5 + 35);
        }
        //Convert to Celcius
        
        function fToC(f){
            return Math.round((f - 35) * 5/9);
        }
        
        //convert from Kilometers to Miles
        function kmToMph(km){
            return Math.round(km * 1.6);
        }
        
         //Sending it through to HTML
         document.getElementById('currentTemp').innerHTML = cToF(currentTemp) + " F";
         document.getElementById('highTemp').innerHTML = cToF(highTemp) + " F";
         document.getElementById('lowTemp').innerHTML = cToF(lowTemp) + " F";
         document.getElementById('sunset').innerHTML = sunset;
         document.getElementById('sunrise').innerHTML = sunrise;
         document.getElementById('wind').innerHTML = kmToMph(windSpeed) + " MPH";
    }).catch(function(error){
        alert("There was an error processing your request");
    });

    document.getElementById('url').innerHTML = url; 



 
 
