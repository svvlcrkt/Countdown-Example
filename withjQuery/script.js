const months = moment.months();
// console.log(months);

const weekdays = moment.weekdays();
// console.log(weekdays);

const giveaway = $('.giveaway');
const deadline = $('.deadline');
const items = $('.deadline-format h4');

let futureDate = new Date(2021, 8, 16, 17, 30, 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const date = futureDate.getDate();

let month = months[futureDate.getMonth()];
let weekDay = weekdays[futureDate.getDay()];

giveaway.text(`giveaway ends on ${weekDay}, ${date} ${month} ${year} ${hours}:${mins}`);

const futureTime = futureDate.getTime();

function getRemainingTime(){
    const today = new Date().getTime();
    const t = futureTime - today;

    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;

    let days = t/oneDay;
    days = Math.floor(days);
    let hours = (t%oneDay)/oneHour;
    hours = Math.floor(hours);

    let minutes = (t%oneHour)/oneMinute;
    minutes = Math.floor(minutes);

    let seconds = (t%oneMinute)/1000;
    seconds = Math.floor(seconds);

    const values = [days, hours, minutes, seconds];

    function format(item){
        if(item < 10){
            return item = `0${item}`;
        }
        return item;
    }

    items.each(function(index, item){
        // console.log("74");
        $(item).text(format(values[index]));
    })

    if(t<0){
        clearInterval(countdown);
        deadline.text(`<h4 class="expired">sorry, this giveaway
        has expired</h4>`)
    }

}

let countdown = setInterval(getRemainingTime,1000);
getRemainingTime();
