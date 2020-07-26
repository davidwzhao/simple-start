function setTime() {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()

    // add leading zero if less than 10
    m = (m < 10) ? '0' + m : m

    // make it 12 hour time
    meridiem = (h < 12) ? 'AM' : 'PM'
    h = (h > 12) ? h - 12 : ((h === 0) ? 12 : h)
    var timeString = h + ":" + m + meridiem + " "

    // display time
    document.getElementById('greeting-time').innerHTML = timeString
    t = setTimeout('setTime()', 1000)
}

function setDate() {
    var days = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ]

    var months = [
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
    ]

    var today = new Date()
    var day = today.getDay();
    var date = today.getDate();
    var month = today.getMonth();

    console.assert(0 <= day && day <= 6 && 0 <= date && date <= 31 && 0 <= month && month <= 11)

    var dateString = days[day] + ", " + date + " " + months[month]

    // display date
    document.getElementById('greeting-date').innerHTML = dateString
    t = setTimeout('setDate()', 30000)
}

function setGreeting() {
    var today = new Date()
    var h = today.getHours()

    greeting = ""

    if (h < 12) {
        greeting = "Good morning"
    } else if (h < 17) {
        greeting = "Good afternoon"
    } else if (h < 22) {
        greeting = "Good evening"
    } else {
        greeting = "Good night"
    }

    // display greeting
    document.getElementById('greeting-text').innerHTML = greeting
    t = setTimeout('setGreeting()', 600000)
}

window.addEventListener("load", function() {
    setTime()
    setDate()
    setGreeting()
});
