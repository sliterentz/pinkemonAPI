import winston, { createLogger, format, transports } from 'winston'
import * as fs from 'fs'
// import path from 'path'
import moment from 'moment-timezone'

moment.tz.setDefault('Asia/Jakarta')
const today = moment()
const fileFormat = today.format('YYYY-MM-DD')
const timeFormat = today.format('YYYY-MM-DD HH:MM:SS')

let maxsizeLog: number = 5242880
let maxfileLog: number = 25

// create log file if not exist
const logDirectory = './logs'//path.join(__dirname, process.env.LOG_DIR_NAME)
if (!fs.existsSync(logDirectory)) {
    fs.mkdirSync(logDirectory)
}

// const levels = {
//         error: 0,
//         warn: 1,
//         info: 2,
//         verbose: 3,
//         debug: 4,
//         silly: 5,
//         http: 6
// }

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

// const colors = {
//     error: 'red',
//     warn: 'yellow',
//     info: 'green',
//     verbose: 'purple',
//     debug: 'white',
//     silly: 'grey',
//     http: 'orange'
// }

const myCustomLevels = {
    levels: {
        error: 0,
        warning: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    },
    colors: {
        error: 'red',
        warning: 'yellow',
        info: 'green',
        verbose: 'purple',
        debug: 'white',
        silly: 'grey',
        http: 'orange'
    }
};

// winston.addColors(colors)

// const format = winston.format.combine(
//     winston.format.timestamp({ format: timeFormat }),
//     winston.format.colorize({ all: true }),
//     winston.format.printf(
//       (info) => `${info.timestamp} ${info.level}: ${info.message}`,
//     ),
// )

const myFormat = format.printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

const customTransports = [
    new transports.Console(),
    new transports.File({
        level: 'error',
        filename: fileFormat + '_error.log',
        dirname: logDirectory,
        maxsize: maxsizeLog.valueOf(),
        maxFiles: maxfileLog.valueOf(),
    }),
    new transports.File({
        // level: 'info',
        filename: fileFormat + '.log',
        dirname: logDirectory,
        handleExceptions: true,
        // json: true,
        maxsize: maxsizeLog.valueOf(),
        maxFiles: maxfileLog.valueOf(),
        // colorize: true,
        // timestamp: today
    }),
    // new winston.transports.Console({
    //     name: 'error',
    //     level: 'error',
    //     handleExceptions: true,
    //     json: false,
    //     colorize: true,
    // }),
    // new winston.transports.Console({
    //     name: 'debug',
    //     level: 'debug',
    //     handleExceptions: true,
    //     json: false,
    //     colorize: true,
    // }),
]

// app loger config
const AppLogger = createLogger({
    level: level(),
    levels: myCustomLevels.levels,
    format: format.combine(
        format.label({ label: 'Pinkemon Service' }),
        format.timestamp({ format: timeFormat }),
        myFormat
    ),
    transports: customTransports,
    exitOnError: false,
})

export default AppLogger