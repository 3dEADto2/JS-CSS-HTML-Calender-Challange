const monthEl = document.querySelector('.header h2');

const monthIndex = new Date().getMonth();

const monthArr = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

monthEl.innerText = monthArr[monthIndex];


const fullDateEl = document.querySelector('.header p');

const fullDate = new Date().toDateString();

fullDateEl.innerText = fullDate;


const lastDay = new Date(new Date().getFullYear(), monthIndex + 1, 0).getDate();
const firstDay = new Date(new Date().getFullYear(), monthIndex, 1).getDay();
const daysEl = document.querySelector('.days');
const todayDate = Number(new Date().toDateString().split(' ')[2]);
let days = '';

if (firstDay === 0) {
    days += `<div class="empty"></div>`.repeat(6);
} else {
    days += `<div class="empty"></div>`.repeat(firstDay - 1);
}

for (let i = 1; i <= lastDay; i++) {
    if (i === todayDate) {
        days += `<div class="today">${i}</div>`
    } else {
        days += `<div>${i}</div>`
    }
}

daysEl.innerHTML = days;
