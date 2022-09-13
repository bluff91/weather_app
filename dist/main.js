/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/factory.js":
/*!************************!*\
  !*** ./src/factory.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "myFactory": () => (/* binding */ myFactory)
/* harmony export */ });
function myFactory (temp, w_descripton, dt_txt, city,) {
    return {
        dayTemperature,
        weatherDescription,
        time,
        city
    }
}



/***/ }),

/***/ "./src/getData.js":
/*!************************!*\
  !*** ./src/getData.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getData": () => (/* binding */ getData)
/* harmony export */ });

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



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getData */ "./src/getData.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factory */ "./src/factory.js");


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
    searchBtn.addEventListener('click', _getData__WEBPACK_IMPORTED_MODULE_0__.getData);

    const main = document.createElement('div');
    main.innerHTML=(0,_getData__WEBPACK_IMPORTED_MODULE_0__.getData)().differentDaysTemp;
    document.body.append(main);
    
})();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBc0UsS0FBSyxnQ0FBZ0MsS0FBSyxTQUFTLE1BQU0sU0FBUyxPQUFPO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNpQjtBQUNqQjtBQUNBLDBGQUEwRixJQUFJLE9BQU8sSUFBSSxzQkFBc0IsT0FBTztBQUN0STs7QUFFQTtBQUNBOztBQUVBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsNEJBQTRCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7Ozs7Ozs7O1VDbEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ1g7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEdBQTRHLE9BQU87QUFDbkg7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdDQUF3Qyw2Q0FBTzs7QUFFL0M7QUFDQSxtQkFBbUIsaURBQU87QUFDMUI7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9mYWN0b3J5LmpzIiwid2VicGFjazovL3dlYXRoZXJfYXBwLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBteUZhY3RvcnkgKHRlbXAsIHdfZGVzY3JpcHRvbiwgZHRfdHh0LCBjaXR5LCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGRheVRlbXBlcmF0dXJlLFxuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24sXG4gICAgICAgIHRpbWUsXG4gICAgICAgIGNpdHlcbiAgICB9XG59XG5cbmV4cG9ydCB7bXlGYWN0b3J5fTsiLCJcbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKSB7XG5cbiAgICBsZXQgY2l0eSA9IFwiSWFzaVwiO1xuICAgIGNvbnN0IGxhbmcgPSAnRU4nO1xuICAgIGNvbnN0IHVuaXRzID0gJ21ldHJpYyc7XG4gICAgY29uc3QgYXBpS2V5ID0gJzkxOTI4NzQyYTlkMGM2NTk5Y2FkYmNhOWNiYjRhMjdjJztcbiAgICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P3E9JHtjaXR5fSZleGNsdWRlPW1pbnV0ZWx5LGhvdXJseSZsYW5nPSR7bGFuZ30mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9YDtcbiAgICBcbiAgICAvL3RyeWluZyBhc3luYyAmIGF3YWl0IDooXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IHJlY2lldmVkRGF0YSA9IGF3YWl0IGRhdGEuanNvbigpO1xuXG4gICAgICAgIHJldHVybiByZWNpZXZlZERhdGE7XG4gICAgfVxuICAgIGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn1cbmV4cG9ydCB7Z2V0RGF0YX07XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlICxyZWplY3QpID0+IHtcbi8vICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz1tZXRyaWMmYXBwaWQ9JHthcGlLZXl9YCk7XG4vLyAgICAgICAgIHJlc29sdmUocmVzcG9uc2UpO1xuXG4vLyAgICAgICAgIGxldCBtc2cgPSBcIkVycm9hcmUgOigoXCI7XG4vLyAgICAgICAgIHJlamVjdChuZXcgRXJyb3IobXNnKSk7XG5cbi8vICAgICB9KSAgXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuLy8gICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuLy8gICAgIH0pXG4vLyAgICAgLnRoZW4oZnVuY3Rpb24oZGF0YSl7XG4vLyAgICAgICAgIGxldCByZWNpZXZlZERhdGEgPSBkYXRhO1xuXG4vLyAgICAgICAgIGxldCBkaWZmZXJlbnREYXlzVGVtcCA9IFtdO1xuLy8gICAgICAgICBsZXQgd2VhdGhlckRlc2NyaXB0aW9uID0gW107XG4vLyAgICAgICAgIGxldCB0aW1lID0gW107XG4vLyAgICAgICAgIGxldCBjaXR5ID0gcmVjaWV2ZWREYXRhLmNpdHkubmFtZTtcbi8vICAgICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxyZWNpZXZlZERhdGEubGlzdC5sZW5ndGg7IGkrPTgpIHtcbi8vICAgICAgICAgICAgICAgICBkaWZmZXJlbnREYXlzVGVtcC5wdXNoKHJlY2lldmVkRGF0YS5saXN0W2ldLm1haW4udGVtcCk7XG4vLyAgICAgICAgICAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnB1c2gocmVjaWV2ZWREYXRhLmxpc3RbaV0ud2VhdGhlclswXS5kZXNjcmlwdGlvbik7XG4vLyAgICAgICAgICAgICAgICAgdGltZS5wdXNoKHJlY2lldmVkRGF0YS5saXN0W2ldLmR0X3R4dCk7XG4vLyAgICAgICAgICAgICB9XG4gICAgICAgIFxuLy8gICAgICAgICAvLyAgY29uc29sZS50YWJsZShkaWZmZXJlbnREYXlzVGVtcCk7XG4vLyAgICAgICAgIC8vICBjb25zb2xlLmxvZyh3ZWF0aGVyRGVzY3JpcHRpb24pO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhyZWNpZXZlZERhdGEpO1xuLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lKTtcbi8vICAgICAgICAgLy8gY29uc29sZS5sb2coY2l0eSk7XG5cbi8vICAgICAgICAgIHJldHVybiB7XG4vLyAgICAgICAgICAgICBkaWZmZXJlbnREYXlzVGVtcCxcbi8vICAgICAgICAgICAgIHdlYXRoZXJEZXNjcmlwdGlvbixcbi8vICAgICAgICAgICAgIHRpbWUsXG4vLyAgICAgICAgICAgICBjaXR5LFxuLy8gICAgICAgICAgICAgcmVjaWV2ZWREYXRhLFxuLy8gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4vLyAgICAgICAgIH0pXG4vLyAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4vLyAgICAgfSlcbi8vIH1cbi8vIGdldERhdGEoKS50aGVuKGNvbnNvbGUubG9nKGRpZmZlcmVudERheXNUZW1wKSk7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtnZXREYXRhLCBtYXNzYWdlRGF0YX0gZnJvbSBcIi4vZ2V0RGF0YVwiXG5pbXBvcnQge215RmFjdG9yeX0gZnJvbSBcIi4vZmFjdG9yeVwiXG5jb25zb2xlLmxvZyhcImtra1wiKTtcbi8vIDkxOTI4NzQyYTlkMGM2NTk5Y2FkYmNhOWNiYjRhMjdjIG15IEFQSSBrZXlcbnZhciBteU1vZHVsZSA9IChmdW5jdGlvbigpe1xuXG4gICAgLy8gZG9pbmcgdGhlIHByb21pc2Ugcm91dGVcbiAgICBcbiAgXG4gICAgLy8gdGhpcyB3b3Jrc1xuICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9NDQuMzQmbG9uPTEwLjk5JmFwcGlkPSR7YXBpS2V5fWApXG4gICAgLy8gLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXG4gICAgLy8gfSlcbiAgICAvLyAudGhlbihmdW5jdGlvbihkYXRhKXtcbiAgICAvLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gfSlcbiAgIFxuICAgIC8vZG9tIHN0dWZmIGJlbGxvd1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaExvY2F0aW9uJyk7XG5cbiAgICBjb25zdCBzZWFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoQnRuJyk7XG4gICAgc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0RGF0YSk7XG5cbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5pbm5lckhUTUw9Z2V0RGF0YSgpLmRpZmZlcmVudERheXNUZW1wO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKG1haW4pO1xuICAgIFxufSkoKTtcblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=