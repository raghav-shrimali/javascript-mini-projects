/* This line of code is selecting an HTML element with the id "result" using the `document.getElementById` method and storing it in a constant variable named `result`. This allows you to manipulate or access the selected element in your JavaScript code. */

setInterval(()=>{
    const result = document.getElementById('result');

const currentTime  = Date.now();
//milliseconds
const olympicTime = new Date(2028,6,14).getTime();
let timer = olympicTime-currentTime;

//millisecond
// millisecond = sec * min * hour * day
const day = Math.floor((timer)/(1000*60*60*24));
timer%=1000*60*60*24;
const hour = Math.floor((timer)/(1000*60*60));
timer%=1000*60*60;
const minute = Math.floor((timer)/(1000*60));
timer%=1000*60;
const second = Math.floor((timer)/(1000));
 timer%=1000;


 result.textContent = `${day}:Days ${hour} : Hour  ${minute}: Minute  ${second}:Second `;

})
 


