function windChill(tempF, speed) {

    //temperature factor equation
    let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    //return variable f
    return f;
}

// get inputs from fields
let t = parseFloat(document.getElementById("tempInput").innerHTML);
let s = parseFloat(document.getElementById("speedInput").innerHTML);

//call windChill() function to the variable chill and apply the users inputs
let chill = windChill(t, s);

//output the result to a user

if (t <= 50 && s > 3.0) {
    document.getElementById("output").innerHTML = chill.toFixed(1) + ' &deg;F';
} else {
    document.getElementById("output").innerHTML ='N/A';
}