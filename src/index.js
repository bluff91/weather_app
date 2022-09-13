import {getData, massageData} from "./getData"
import {myFactory} from "./factory"
console.log("kkk");
// 91928742a9d0c6599cadbca9cbb4a27c my API key
var myModule = (function(){

    // doing the promise route
    
  
    // this works
    // const response = fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=${apiKey}`)
    // .then(function(response){
    //     return response.json()
    // })
    // .then(function(data){
    //     console.log(data);
    // })
   
    //dom stuff bellow
    const input = document.getElementById('searchLocation');

    const searchBtn = document.querySelector('.searchBtn');
    searchBtn.addEventListener('click', getData);

    const main = document.createElement('div');
    main.innerHTML=getData().differentDaysTemp;
    document.body.append(main);
    
})();


