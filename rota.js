// calc number of milliseconds in one week (7 days * 24 hours * 60 minutes * 60 seconds * 1000)
var millisecsPerWeek = 7 * 24 * 60 * 60 * 1000;
// set date of our epoc start: week ending Sunday 16th Oct 2016 - yes that's right, JS calls Oct month 9 and Jan month 0 !!!
var dayOne = new Date(2016, 09, 16);
// get date now
var dayNow = new Date();

// calc how many milliseconds have elapsed since our epoc start
var millisecsElapsed = dayNow.getTime() - dayOne.getTime();
// calc the current week number of our epoc and whether it is a week 0, 1, 2, 3, 4 or 5 of the 6 week cycle
var weekNumber = Math.ceil( millisecsElapsed / millisecsPerWeek ) % 6;
// assign week number to html element
var elMsgToday = document.getElementById('msgToday');
elMsgToday.textContent = dayNow.toDateString() + " - Week " + weekNumber.toFixed(0);

// assign weekly rooms
var elRooms1 = document.getElementById('rooms1');
elRooms1.textContent = "snug, stairs, landing";

var elRooms2 = document.getElementById('rooms2');
elRooms2.textContent = "bathroom, lounge";

var elRooms3 = document.getElementById('rooms3');
elRooms3.textContent = "kitchen";
// snug, stairs, landing, bathroom, lounge, kitchen, hall, den,/ spare room,  pip bedroom, main bedroom,

// assign cleaners and fortnightly rooms and bedrooms
switch ( weekNumber ) {
  case 0:
    var elInits1 = document.getElementById('inits1');
    elInits1.textContent = "PR";
    elRooms1.textContent = elRooms1.textContent + ", own bedroom";

    var elInits2 = document.getElementById('inits2');
    elInits2.textContent = "PG";
    elRooms2.textContent = elRooms2.textContent + ", own bedroom";

    var elInits3 = document.getElementById('inits3');
    elInits3.textContent = "JG";
    elRooms3.textContent = elRooms3.textContent + ", hall, den";

    break;
  case 1:
    var elInits1 = document.getElementById('inits1');
    elInits1.textContent = "JG";
    elRooms1.textContent = elRooms1.textContent + ", own bedroom";

    var elInits2 = document.getElementById('inits2');
    elInits2.textContent = "PR";

    var elInits3 = document.getElementById('inits3');
    elInits3.textContent = "PG";
    elRooms3.textContent = elRooms3.textContent + ", spare room";
    elRooms3.textContent = elRooms3.textContent + ", own bedroom";

    break;
  case 2:
    var elInits1 = document.getElementById('inits1');
    elInits1.textContent = "PG";
    elRooms1.textContent = elRooms1.textContent + ", own bedroom";

    var elInits2 = document.getElementById('inits2');
    elInits2.textContent = "JG";

    var elInits3 = document.getElementById('inits3');
    elInits3.textContent = "PR";
    elRooms3.textContent = elRooms3.textContent + ", hall, den";
    elRooms3.textContent = elRooms3.textContent + ", own bedroom";

    break;
  case 3:
    var elInits1 = document.getElementById('inits1');
    elInits1.textContent = "PR";

    var elInits2 = document.getElementById('inits2');
    elInits2.textContent = "PG";
    elRooms2.textContent = elRooms2.textContent + ", own bedroom";

    var elInits3 = document.getElementById('inits3');
    elInits3.textContent = "JG";
    elRooms3.textContent = elRooms3.textContent + ", spare room";
    elRooms3.textContent = elRooms3.textContent + ", own bedroom";

    break;
  case 4:
    var elInits1 = document.getElementById('inits1');
    elInits1.textContent = "JG";

    var elInits2 = document.getElementById('inits2');
    elInits2.textContent = "PR";
    elRooms2.textContent = elRooms2.textContent + ", own bedroom";

    var elInits3 = document.getElementById('inits3');
    elInits3.textContent = "PG";
    elRooms3.textContent = elRooms3.textContent + ", hall, den";
    elRooms3.textContent = elRooms3.textContent + ", own bedroom";

    break;
  case 5:
    var elInits1 = document.getElementById('inits1');
    elInits1.textContent = "PG";
    elRooms1.textContent = elRooms1.textContent + ", own bedroom";

    var elInits2 = document.getElementById('inits2');
    elInits2.textContent = "JG";
    elRooms2.textContent = elRooms2.textContent + ", own bedroom";

    var elInits3 = document.getElementById('inits3');
    elInits3.textContent = "PR";
    elRooms3.textContent = elRooms3.textContent + ", spare room";

    break;
  default:
    alert('Oops! Something went wrong - take this week off!');
    break;
}

// console.log("elMsgToday=", elMsgToday);
