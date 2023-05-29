function doInputOutput() {

    // get inputs from fields
    let t = parseFloat(document.getElementById("tempInput").value);
    let s = parseFloat(document.getElementById("speedInput").value);

    //call windChill() function to the variable chill and apply the users inputs
    let chill = windChill(t, s);

    //output the result to a user
    document.getElementById("output").innerHTML = chill.toFixed(1) + ' &deg;F';


}
function windChill(tempF, speed) {

    //temperature factor equation
    let f = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * tempF * Math.pow(speed, 0.16));
    //return variable f
    return f;
}