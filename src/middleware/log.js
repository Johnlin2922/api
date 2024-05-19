const options = {
    timeZone: 'America/Chicago', // Central Time Zone
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
};

const centralTime = new Date().toLocaleString('en-US', options).replace(/,/g, '');

const Info = (log) => {
    console.log(`${centralTime}|INFO: ${log}`);
}
const Debug = (log) => {
    console.log(`${centralTime}|DEBUG: ${log}`);
}
const Error = (log) => {
    console.log(`${centralTime}|ERROR: ${log}`);
}

module.exports = { Info, Debug, Error }