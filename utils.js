const addMinutes = require('date-fns/addMinutes')
const SunCalc = require('suncalc');
const format = require("date-fns/format")

const GERMANY_COORDINATE = {
lat: 51.0834196,
long: 10.4234469,
};

/**
 * Calculate the sunrise and sunset in middle of Germany based in a Date
 *  
 * @param {Date} date - Date attribute
 * @return {{ sunrise: string, sunset: string }} result - A object containing the time of sunrise and sunset in Germany
 */
function calculateGermanSunriseSunsetForDate(date) {
    if (!date && !(date instanceof Date)) throw new Error(`invalid operation`);

    const result = SunCalc.getTimes(date, GERMANY_COORDINATE.lat, GERMANY_COORDINATE.long);
    return {
        sunrise: format(result.sunrise, "HH:mm"),
        sunset: format(result.sunset, "HH:mm"),
    };
}

/**
 * Return the array of dates within the specified time interval.
 * @param {Interval} interval – Date interval
 * @param {Object} options - Options
 * @param {number} options.step - Minutes step
 * @return {Date[]} result - Array of dates
 */
function eachMinuteOfInterval({ start, end }, { step = 30 } = {}) {
    const result = [start];
    let current = start;
    while (current < end) {
        current = addMinutes(current, step);
        result.push(current);
    }
    return result;
}

module.exports = {
    calculateGermanSunriseSunsetForDate, eachMinuteOfInterval
}