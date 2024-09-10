const convertTo24HoursFormat = timeText => {
    const timeTextLower = timeText.toLowerCase();
    let [hours, mins] = timeTextLower.split(':');
    if (timeTextLower.endsWith("am")) {
        hours = hours === "12" ? "0" : hours;
    } else if (timeTextLower.endsWith("pm")) {
        hours = hours === "12" ? hours : String(+hours + 12);
    }
    // console.log(hours,mins)
    return hours.padStart(2,"0")+':'+mins.slice(0,-2).padStart(2,0);
}

console.log(convertTo24HoursFormat('8:10AM'))
console.log(convertTo24HoursFormat('5:4PM'))
console.log(convertTo24HoursFormat('12:40PM'))