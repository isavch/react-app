export {
  log,
  warn,
  info,
  error
};

function info(...args) {
  console.info(...args); // eslint-disable-line
}

function log(...args) {
  console.log(...args); // eslint-disable-line
}

function warn(...args) {
  console.warn(...args); // eslint-disable-line
}

function error(...args) {
  console.error(...args); // eslint-disable-line
}

