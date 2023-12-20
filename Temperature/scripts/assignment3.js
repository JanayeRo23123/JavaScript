function conversion () {
    const temperatureInput = document.getElementById("temperature");
    const scaleSelect = document.getElementById("scale");
    const results = document.getElementById("results");

    const start = parseFloat(temperatureInput.value);
    const scale = scaleSelect.value;

    if (!isNaN(start)) {
        if (scale === "Celsius") {
            //*convert from celsius to fahrenheit*//
            const fahrenheit = (start * 9/5) + 32;
            results.textContent = `${start} Celsius is ${fahrenheit.toFixed}`
        } else if (scale==="Fahrenheit") {

            const celsius = (start - 32) * 5/9;
            results.textContent = `${start} Fahrenheit is ${celsius.toFixed}`
        } else if (scale==="Fahrenheit") {
            document.getElementById("results").innerHTML=`<p> ${results} </p>`;
        }
    }
        }

