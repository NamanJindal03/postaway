import winston from "winston";

const winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
      new winston.transports.File({ filename: 'logs' }),
    ],
});

export {winstonLogger} 