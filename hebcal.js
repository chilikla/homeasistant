const Hebcal = require('hebcal');
const moment = require('moment');

let hebcal = new Hebcal();

const key = process.argv[2];
let day = new Hebcal.HDate();
day.setCity('Jerusalem');

if (key == 'date') {
  console.log(day.toString('h'));
}
else if (key == 'shabbat_entrance') {
  let friday = day.nearest(5);
  friday.setCity('Jerusalem');
  console.log(moment(friday.candleLighting()).format('HH:mm'));
}
else if (key == 'shabbat_exit') {
  let saturday = day.nearest(6);
  saturday.setCity('Jerusalem');
  console.log(moment(saturday.havdalah()).format('HH:mm'));
}
else if (key == 'sunset') {
  console.log(moment(day.sunset()).format('HH:mm'));
}
else if (key == 'parasha') {
  console.log(day.getParsha('h').toString());
}
