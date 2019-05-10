function setTime() {
    var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    // var s = today.getSeconds()

    // add leading zero if less than 10
    m = (m < 10) ? '0' + m : m
    // s = (s < 10) ? '0' + s : s

    // make it 12 hour time
    meridiem = (h < 12) ? 'AM' : 'PM'
    h = (h > 12) ? h - 12 : ((h === 0) ? 12 : h)

    var timeString = h + ":" + m + meridiem + " "
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
    document.getElementById('greeting-date').innerHTML = dateString
    t = setTimeout('setDate()', 30000)
}

window.onload = function() {
    setTime()
    setDate()
}
