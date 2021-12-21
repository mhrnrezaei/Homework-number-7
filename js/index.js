let dt = new Date();
let dt_day = dt.getDay();
let day = "";
let txt = "";
switch (dt_day) {
    case 0:
        day = "Sunday"
        txt = "Every day is a new day, and you'll never be able to find happiness if you don't move on."
        break;
    case 1:
        day = "Monday"
        txt = "Every day, in every way, I'm getting better and better."
        break;
    case 2:
        day = "Tuesday"
        txt = "Every day, I like to wake up and remind myself to be grateful of the simple things."
        break;
    case 3:
        day = "Wednesday"
        txt = "I am happy every day, because life is moving in a very positive way."
        break;
    case 4:
        day = "Thursday"
        txt = "If you learn something new every day, you can teach something new every day."
        break;
    case 5:
        day = "Friday"
        txt = "I'm always thinking about creating. My future starts when I wake up every morning... Every day I find something creative to do with my life."
        break;
    case 6:
        day = "Saturday"
        txt = "Start every day off with a smile and get it over with."
        break;
    default:
        txt = "somthing Wrong";
}
function showday() {
    document.getElementById('day').innerHTML = day;
    document.getElementById('message').innerHTML = txt;
}