import moment from 'moment-timezone';

import { formatsDates } from 'constants/formats';

/**@module Date */
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const digitsRegExp = /^\d+$/;
export const second = 1000;
export const minute = second * 60;
export const hour = minute * 60;

function getDate(value) {
  if (typeof value === 'number') {
    return new Date(value);
  }

  if (typeof value === 'string' && digitsRegExp.test(value)){
    return new Date(parseInt(value, 10));
  }

  if (value) {
    return value;
  }

  return new Date;
}

/**
 * @function
 * @param date {Object} Date Object
 * @param timeZone {String}
 * @example
 * 'Nov 11, 2016, Today'
 * @returns {string} Formatted date string
 */
export const formatCurrentDate = (date, timeZone) => {
  return `${moment().format(formatsDates.log)}, Today`;
};

/**
 * @function
 * @param date {Object | Number} Date Object or Timestamp
 * @param timeZone {String} 'America/New_York'
 * @example
 * 'Nov 11, 2016'
 * @returns {string} Formatted date string
 */
export const formatLogDate = (date, timeZone) => {
  return moment(date).tz(timeZone).format(formatsDates.log);
};

/**
 * @function
 * @param date {Object} Date Object
 * @param timeZone {String}
 * @param [noampm] {Boolean} Flag. Use 24h or AM/PM
 * @example
 * '03:07 PM'
 * @returns {string} Formatted date string
 */
export const formatTime = (date, timeZone, noampm) => {
  if (noampm) {
    return moment(date).tz(timeZone).format('HH:mm');
  }

  return moment(date).tz(timeZone).format('h:mm');
};

/**
 * @function
 * @param number {Number | String} Original number
 * @example
 * formatDateNumber(1);
 * '01'
 * @returns {string} Formatted number
 */
export const formatDateNumber = number => {
  return number < 10 ? '0' + number : number;
};

/**
 * @function
 * @param date {Object} Date Object
 * @example
 * formatAMPM(new Date(2016, 0, 1, 17, 0, 0));
 * '05:00PM'
 * @returns {string} Formatted time
 */
export const formatAMPM = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  let strTime;

  hours = hours % 12;
  hours = hours ? formatDateNumber(hours) : 12; // the hour '0' should be '12'
  minutes = formatDateNumber(minutes);
  strTime = hours + ':' + minutes + ' ' + ampm;

  return strTime;
};

/**
 * @function
 * @param day {Number} Day index, Sunday - 1
 * @example
 * getDayName(1)
 * 'Sunday'
 * @returns {string} Day name
 */
export const getDayName = day => {
  return days[day - 1];
};

/**
 * @function
 * @param date {Object} Date object
 * @param timeZone {String}
 * @example
 * Nov 11,2016, Friday'
 * @returns {string} Formatted string
 */
export const formatLocationDate = (date, timeZone) => {
  return moment(date).tz(timeZone).format(formatsDates.location);
};

/**
 * @function
 * @param ts {Number} Timestamp
 * @example
 * '1h 3m'
 * @returns {string} Formatted tring
 */
export const formatDurationTime = ts => {
  const hours = Math.floor(ts / hour);
  const minutes = Math.floor((ts - hours * hour) / minute);

  if (!hours ) {
    return `${minutes}m`;
  }

  return `${hours}h ${minutes}m`;
};

/**
 * @function
 * @param date {Object} Date object
 * @example
 * '23:45'
 * @returns {string} Formatted string
 */
export const formatTime24Hours = date => {
  let hours = date.getHours();
  let minutes = date.getMinutes();

  hours = formatDateNumber(hours);
  minutes = formatDateNumber(minutes);

  return `${hours}:${minutes}`;
};

/**
 * @function
 * @param date {Number} Timestamp
 * @param time {string} Time string '02:32 AM'
 * @param timeZone {String}
 * @example
 * '1481289044896'
 * @returns {number} Milliseconds
 */
export const timeStringToMilliseconds = (date, time, timeZone) => {
  const currentDay = moment.tz(date, timeZone).startOf('day');

  return moment.tz(`${currentDay.format('YYYY-MM-DD')}T${time}`, timeZone).valueOf();
};

/**
 * @function
 * @param [value] {object | number} Date object or Milliseconds
 * @param timeZone {String}
 * @returns {number} Milliseconds
 */
export const getStartOfTheDay = (value, timeZone) => {
  return moment(value).tz(timeZone).startOf('day').valueOf();
};

/**
 * @function
 * @param [value] {object | number} Date object or Milliseconds
 * @returns {number} Milliseconds
 */
export const getEndOfTheDay = value => {
  const date = getDate(value);

  date.setHours(24);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);

  return date.getTime();
};

/**
 * @function
 * @param [value] {object | number} Date object or Milliseconds
 * @returns {number} Milliseconds
 */
export const getPreviousDay = value => {
  const date = getDate(value);

  date.setDate(date.getDate() - 1);

  return date.getTime();
};

/**
 * @function
 * @param date {Object} Date Object
 * @param timeZone {String}
 * @example
 * 'Nov 11,2016 01:07PM'
 * @returns {string} Formatted date string
 */
export const formatSignatureDate = (date, timeZone) => {
  return moment(date).tz(timeZone).format(formatsDates.signature);
};

/**
 * @function
 * @param timestamp {Number}
 * @param timeZone {String}
 */
export const truncateSeconds = (timestamp, timeZone) => {
  return moment.tz(timestamp, timeZone).seconds(0).milliseconds(0).valueOf();
};

/**
 * @function
 * @param ms {Number}
 * @param timeZone {String}
 * @returns {{hours: number, minutes: number}}
 */
export const msToHmRaw = (ms, timeZone) => {
  const ts = truncateSeconds(ms, timeZone);
  const hours = Math.floor(ts / 3600000);
  const minutes = Math.floor(ts % 86400000 % 3600000 / 60000);

  return { hours, minutes };
};

/**
 * @function
 * @param currentDate
 * @param dateItem
 * @param timeZone {String}
 * @returns {*}
 */
export const formatGridDate = (currentDate, timeZone, dateItem) => {
  currentDate = moment(currentDate).tz(timeZone);
  dateItem = moment(dateItem).tz(timeZone);
  const hours = dateItem.hours();

  if (hours === 12) {
    return 'NOON';
  }

  if (hours === 0) {
    return currentDate.valueOf() === dateItem.valueOf() ? 'AM' : 'PM';
  }

  if (Math.abs(hours) % 2 === 1) {
    return '';
  }

  return dateItem.format('HH');
};

/**
 * @function
 * @param ms {Number}
 * @param timeZone {String}
 * @returns {string}
 */
export const msToHm = (ms, timeZone) => {
  const { hours, minutes } = msToHmRaw(ms, timeZone);

  return `${formatTimeUnit(hours)}:${formatTimeUnit(minutes)}`;
};

/**
 * @function
 * @param date {Number}
 * @param timezone {String}
 * @returns {string}
 */
export const formatDate = (date, timezone) => {
  return moment(date).tz(timezone).format(formatsDates.markerTime);
};

/**
 * @function
 * @param unit
 * @returns {string}
 */
export const formatTimeUnit = unit => {
  return unit < 10 ? `0${unit}` : unit;
};

/**
 * @function
 * @param timestamp {Number}
 * @param timeZone {String}
 * @returns {boolean}
 */
export const isToday = (timestamp, timeZone) => {
  return getStartOfTheDay(timestamp, timeZone) === getStartOfTheDay(moment().tz(timeZone), timeZone);
};

/**
 * @function
 * @param timeZone {String}
 */
export const getTimeNow = (timeZone) => {
  return moment().tz(timeZone).valueOf();
};

/**
 * @function
 * @param timeZone {String}
 * @returns {number}
 */
export const getTimeNowWithSeconds = (timeZone) => {
  return moment().tz(timeZone).valueOf();
};

/**
 * @function
 * @param timestamp
 * @returns {function(*)}
 */
export const inDayRange = (timestamp) => {
  const start = new Date(timestamp).setHours(0, 0, 0, 0);
  const end = new Date(timestamp).setHours(24, 0, 0, 0);

  return inPeriodRange(start, end);
};

/**
 * @function
 * @param from
 * @param to
 * @returns {function(*)}
 */
export const inPeriodRange = (from, to) => {
  return date => {
    return from <= date && date < to;
  }
};

/**
 * @function
 * @param dateA
 * @param dateB
 * @returns {*|boolean}
 */
export const isSameDate = (dateA, dateB) => {
  return dateA && dateB && dateA.getMonth() === dateB.getMonth() &&
    dateA.getDate() === dateB.getDate() &&
    dateA.getFullYear() === dateB.getFullYear();
};

/**
 * @function
 * @param date
 * @param timeZone {String}
 * @returns {Number} Timestamp
 */
export const endOfDayMs = (date, timeZone) => {
  return moment(date).tz(timeZone).add(1, 'days').startOf('day').valueOf();
};

/**
 * @function
 * @param timestamp
 * @returns {function(*)}
 */
export const durationsInteresects = timestamp => {
  return item => {
    const from = item.ts;
    const to = item.end || Date.now();

    return inDayRange(timestamp)(from) || inPeriodRange(from, to)(timestamp);
  };
};
