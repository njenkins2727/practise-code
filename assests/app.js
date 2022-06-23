// //covid stats practise 
// const startBtn = document.getElementById("start-button");
// const statContainer = document.getElementById("stats");
// const requestUrl = "https://api.covid19api.com/summary"

// function getApi(){
// fetch(requestUrl)
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//  console.log(data.Countries[186]);
// // create the list 
// const todayCases = document.createElement('p');
// const totalCases = document.createElement('p');
// const totalDeaths = document.createElement('p');

//     // add data to the list
// todayCases.textContent = "Latest Cases: " + data.Countries[186].NewConfirmed;
// totalCases.textContent = "Total Confirmed: " + data.Countries[186].TotalConfirmed;
// totalDeaths.textContent = "Total Deaths: " + data.Countries[186].TotalDeaths;

//     // append
// statContainer.append(todayCases);
// statContainer.append(totalCases);
// statContainer.append(totalDeaths);

// })
// }

// // add ()to end of getApi and see what it does, important remember 
// startBtn.addEventListener('click', getApi);


const fetchBtn = document.getElementById("start-button");
const statContainer = document.getElementById("stats"); 

const requestUrl = "https://www.themealdb.com/api/json/v1/1/random.php"

function getApi(){

    fetch(requestUrl)
    .then (function (response){
        return response.json();
    })
    .then(function(data){
        console.log(data.meals);

    })
}

fetchBtn.addEventListener('click', getApi);
