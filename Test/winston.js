const winston = require('winston');
// const chalk = require('chalk');

// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
// const info = chalk.bold.grey;
// const data = chalk.bold.green;

// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, label, printf } = format;




// const myFormat = printf(({ level, message, label, timestamp }) => {
//     level = level.toUpperCase();
//     return `${data(timestamp)} || ${level === 'error' ? error(level) : level === 'info' ? info(level) : level === 'warn' ? warning(level) : data(level) }: ${message}`;
//   });

  
// // const logger = winston.createLogger({
// //   level: 'info',
// //   format: combine(
// //     timestamp(),
// //     myFormat
// //   ),
// //   defaultMeta: { service: 'user-service' },
// //   transports: [
// //     //
// //     // - Write all logs with level `error` and below to `error.log`
// //     // - Write all logs with level `info` and below to `combined.log`
// //     //
// //     // new winston.transports.Console(),
// //     new winston.transports.File({ filename: 'error.log', level: 'error' }),
// //     new winston.transports.File({ filename: 'combined.log' }),
// //   ],
// // });

// // const console = new winston.transports.Console();

// // //
// // // If we're not in production then log to the `console` with the format:
// // // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// // //
// // if (process.env.NODE_ENV !== 'production') {
// //   logger.add(new winston.transports.Console({
// //     format: winston.format.simple(),
// //   }));
// // }

// const logger = winston.createLogger({
//     format: winston.format.printf(info => {
//       return JSON.stringify(info)
//         .replace(/\{/g, '< wow ')
//         .replace(/\:/g, ' such ')
//         .replace(/\}/g, ' >')
//     }),
//     transports: [
//       new winston.transports.Console(),
//     ]
//   });
  
//   logger.info('Hello, this is a logging event with a custom pretty print',  { 'foo': 'bar' });
//   logger.info('Hello, this is a logging event with a custom pretty print2', { 'foo': 'bar' });

  
// logger.log({
//     level: 'error',
//     message: { "data" : "i am"}
//   });


// const winston = require('winston');
// const chalk = require('chalk');

// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
// const info = chalk.bold.grey;
// const data = chalk.bold.green;

// const { createLogger, format, transports } = require('winston');
// const { combine, timestamp, label, printf } = format;




// const myFormat = printf(({ level, message, label, timestamp }) => {
//     level = level.toUpperCase();
//     return `${data(timestamp)} || ${level === 'error' ? error(level) : level === 'info' ? info(level) : level === 'warn' ? warning(level) : data(level) }: ${message}`;
//   });

  
// const logger = winston.createLogger({
//   level: 'info',
//   format: combine(
//     timestamp(),
//     myFormat
//   ),
//   defaultMeta: { service: 'user-service' },
//   transports: [
//     //
//     // - Write all logs with level `error` and below to `error.log`
//     // - Write all logs with level `info` and below to `combined.log`
//     //
//     // new winston.transports.Console(),
//     new winston.transports.File({ filename: 'error.log', level: 'error' }),
//     new winston.transports.File({ filename: 'combined.log' }),
//   ],
// });

// const console = new winston.transports.Console();

// //
// // If we're not in production then log to the `console` with the format:
// // `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
// //
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console({
//     format: winston.format.simple(),
//   }));
// }
const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const config = {
    levels: {
      error: 0,
      debug: 1,
      warn: 2,
      data: 3,
      info: 4,
      verbose: 5,
      silly: 6,
      custom: 7
    },
    colors: {
      error: 'red',
      debug: 'blue',
      warn: 'yellow',
      data: 'grey',
      info: 'green',
      verbose: 'cyan',
      silly: 'magenta',
      custom: 'yellow'
    }
  };
  
  winston.addColors(config.colors);
  
  const myFormat = printf(({ level, message, label, timestamp }) => {
        level = level.toUpperCase();
        return `${timestamp} || ${level}: ${message}`;
      });

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    format.errors({ stack: true }),
    format.splat(),
    format.json(),
    myFormat
  ),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    //
    // - Write to all logs with level `info` and below to `quick-start-combined.log`.
    // - Write all logs error (and below) to `quick-start-error.log`.
    //
    new transports.File({ filename: 'quick-start-error.log', level: 'error' }),
    new transports.File({ filename: 'quick-start-combined.log' })
  ]
});

//
// If we're not in production then **ALSO** log to the `console`
// with the colorized simple format.
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.combine(
      format.colorize(),
      format.simple()
    )
  }));
}

// ***************
// Allows for JSON logging
// ***************

logger.log({
  level: 'info',
  message: 'Pass an object and this works',
  additional: 'properties',
  are: 'passed along'
});

logger.info({
  message: 'Use a helper method if you want',
  additional: 'properties',
  are: 'passed along'
});

// ***************
// Allows for parameter-based logging
// ***************

logger.log('info', 'Pass a message and this works', {
  additional: 'properties',
  are: 'passed along'
});

logger.info('Use a helper method if you want', {
  additional: 'properties',
  are: 'passed along'
});

// ***************
// Allows for string interpolation
// ***************

// info: test message my string {}
logger.log('info', 'test message %s', 'my string');

// info: test message my 123 {}
logger.log('info', 'test message %d', 123);

// info: test message first second {number: 123}
logger.log('info', 'test message %s, %s', 'first', 'second', { number: 123 });

// prints "Found error at %s"
logger.info('Found %s at %s', 'error', new Date());
logger.info('Found %s at %s', 'error', new Error('chill winston'));
logger.info('Found %s at %s', 'error', /WUT/);
logger.info('Found %s at %s', 'error', true);
logger.info('Found %s at %s', 'error', 100.00);
logger.info('Found %s at %s', 'error', ['1, 2, 3']);

// ***************
// Allows for logging Error instances
// ***************

logger.warn(new Error('Error passed as info'));
logger.log('error', new Error('Error passed as message'));

logger.warn('Maybe important error: ', new Error('Error passed as meta'));
logger.log('error', 'Important error: ', new Error('Error passed as meta'));

logger.error(new Error('Error as info'));
