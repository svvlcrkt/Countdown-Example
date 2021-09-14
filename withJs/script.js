const months = moment.months();
// console.log(months);

const weekdays = moment.weekdays();
// console.log(weekdays);

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// console.log(items);
let futureDate = new Date(2021, 8, 16, 17, 30, 0);
const year = futureDate.getFullYear();
// console.log(year);
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

let month = months[futureDate.getMonth()];
// console.log(month);

let weekDay = weekdays[futureDate.getDay()];
// console.log(weekDay);

const date = futureDate.getDate();


 
giveaway.textContent = `giveaway ends on ${weekDay}, ${date} ${month} ${year} ${hours}:${mins}`;

// future time in ms
const futureTime = futureDate. getTime();
// getTime() method returns the number of miliseconds 
// console.log(futureTime); gives 1631543245197

function getRemainingTime(){
    const today = new Date().getTime();
    // console.log(today);
    const t = futureTime - today;
    // console.log(t);
    // 1s = 1000ms
    // 1m = 60s
    // 1hr = 60min
    // 1d = 24hr

    // values in ms

    // how many ms in one day?
    const oneDay = 24*60*60*1000;
    // console.log(oneDay);
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    // calculate all values
    let days = t/oneDay;
    // we don't want to see the decimal part
    // so we use Math.floor method
    days = Math.floor(days);
    console.log(days);

    // we need to look at the remainder of the number of days
    // the mod will give us the rest
    let hours = (t%oneDay)/oneHour;
    hours = Math.floor(hours);
    console.log(hours);

    // then we took the mode of the oneHour to find the rest
    let minutes = (t%oneHour)/oneMinute;
    minutes = Math.floor(minutes);
    console.log(minutes);

    let seconds = Math.floor((t%oneMinute)/1000);

    // set values array
    const values = [days, hours, minutes, seconds];


    function format(item){
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index]);
    })

    // if current time greater than future time, then there will be a problem
    // We can solve this problem by writing a text on the screen.
    if(t<0){  
        clearInterval(countdown);  // clearInterval method cancels the call that was previously created with setInterval
        deadline.innerHTML = `<h4 class="expired">sorry, this giveaway has expired</h4>`;

    }
}

// countdown
let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();


