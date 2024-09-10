// require("./callMock");
const axios = require("axios");

// const { BASE_URL } = require("./baseUrl");
let BASE_URL = "http://example.com"

async function cityWeather(city) {
    // Use console.log within the cityWeather function for debugging.
    // Use the &q= prefix with the city parameter at the end of the URL in order to mock the data correctly.
    console.log(city)
    console.log(typeof city)
    return new Promise(async (resolve, reject) => {
        // Implement the function - call http request
        try {
            if (typeof city !== 'string') {
                reject("not a string")
            }
            if (city === "") {
                reject("string is empty")
            }
            let new_url = `${BASE_URL}&q=${city}`
            let response = await axios.get(new_url);
            if (!response || !response.main) {
                reject("city not found")
            }
            // let { temp, feels_like, temp_min, temp_max, pressure, humidity } = response.main;
            resolve(response.main)
        } catch (err) {
            console.log("city not found")
            reject(err)
        }
        // resolve(object_to_be_returned);
        // Implement the function
    });
}

let main = async () => {
try {
    let result = await cityWeather("")
    console.log(result)  
} catch (error) {
    console.log(error)
} 
}
main();
module.exports = {
    cityWeather,
};
