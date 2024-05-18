const Info = (log) => {
    console.log(`${Date()} | INFO: ${log}`);
}
const Debug = (log) => {
    console.log(`${Date()} | DEBUG: ${log}`);
}
const Error = (log) => {
    console.log(`${Date()} | ERROR: ${log}`);
}

module.exports = { Info, Debug, Error }