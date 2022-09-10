
async function getData() {

    let city = "Iasi";
    const lang = 'EN';
    const units = 'metric';
    const apiKey = '91928742a9d0c6599cadbca9cbb4a27c';
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&exclude=minutely,hourly&lang=${lang}&units=${units}&appid=${apiKey}`;
    
    //trying async & await :(
    try {
        const data = await fetch(url);
        const recievedData = await data.json();

        return recievedData;
    }
    catch(error) {
        console.log(error);
    }

}
export {getData};
//     return new Promise((resolve ,reject) => {
//         const response = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
//         resolve(response);

//         let msg = "Erroare :((";
//         reject(new Error(msg));

//     })  
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//         let recievedData = data;

//         let differentDaysTemp = [];
//         let weatherDescription = [];
//         let time = [];
//         let city = recievedData.city.name;
//             for (let i=0; i<recievedData.list.length; i+=8) {
//                 differentDaysTemp.push(recievedData.list[i].main.temp);
//                 weatherDescription.push(recievedData.list[i].weather[0].description);
//                 time.push(recievedData.list[i].dt_txt);
//             }
        
//         //  console.table(differentDaysTemp);
//         //  console.log(weatherDescription);
//         // console.log(recievedData);
//         // console.log(time);
//         // console.log(city);

//          return {
//             differentDaysTemp,
//             weatherDescription,
//             time,
//             city,
//             recievedData,
//          }
        
        
//         })
//     .catch((error) => {
//         console.log(error);
//     })
// }
// getData().then(console.log(differentDaysTemp));

