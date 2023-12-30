function convertTemperatureRange(startValue, endValue, scale) {
    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemp;

        if (scale === 'C') {

        // Convert Celsius to Fahrenheit
        convertedTemp = (temp * 9/5) + 32;
        console.log(`${temp}°C is ${convertedTemp}°F`);
    } else if (scale === 'F') {
        // Convert Fahrenheit to Celsius
        convertedTemp = (temp - 32) * 5/9;
        console.log(`${temp}°F is ${convertedTemp}°C`);
    } else {
        console.log('Invalid scale. Please use "C" for Celsius or "F" for Fahrenheit.');
        return;
    }
    {
        document.getElementById("results").innerHTML=`<p> ${results} </p>`;
    }
    }
}

