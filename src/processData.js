
async function processData(JsonData) {
    let differentDaysTemp
    let weatherDescription
    let time
    let city = JsonData.city.name;

    for (let i=0; i<JsonData.length; i+=8) {
        differentDaysTemp.push(JsonData.list[i].main.temp);
        weatherDescription.push(JsonData.list[i].weathder[0].description);
        time.push(JsonData.list[i].dt_txt);
    }

    return {
      differentDaysTemp,
      weatherDescription,
      time,
      city,
    }
}
export {processData};