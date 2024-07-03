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
    console.log(`${new Date().toLocaleString('en-US', options).replace(/,/g, '')}|INFO: ${log}`);
}
const Debug = (log) => {
    console.log(`${new Date().toLocaleString('en-US', options).replace(/,/g, '')}|DEBUG: ${log}`);
}
const Error = (log) => {
    console.log(`${new Date().toLocaleString('en-US', options).replace(/,/g, '')}|ERROR: ${log}`);
}

module.exports = { Info, Debug, Error }