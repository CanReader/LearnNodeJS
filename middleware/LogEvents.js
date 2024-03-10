const fs = require('fs');
const fsp = require('fs').promises;
const dates = require('date-fns');
const path = require('path');
const { v4: uuid } = require('uuid');

const logFilePath = path.join(__dirname,'..','logs');

const logEvents = async (message, logName) => {
    const dateTime = `${dates.format(new Date(), 'dd\\MM\\yyyy HH:mm:ss')}`;
    const logItem = `[${dateTime}]: ${message}`;
    console.log(logItem);
    const toLogFile = `[${uuid()}]` + logItem + "\n";

    try {
    if(!fs.existsSync(logFilePath))
        await fsp.mkdir(logFilePath);
    await fsp.appendFile(path.join(logFilePath,logName), toLogFile);
  } catch (error) {
    console.log(error);
  }
};

const logger = (req, res, next) => {
  logEvents(`${req.method}\t${req.headers.origin}\t${req.url}`, 'reqLog.txt');
  console.log(`${req.method} ${req.path}`);
  next();
}

module.exports = {logger, logEvents};