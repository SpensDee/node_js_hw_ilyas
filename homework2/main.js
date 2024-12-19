import logger from './utils/logger.js';

logger.info("Hello World");
logger.warn("Warn Message");
logger.error("Error Message");
logger.success("Success Message");

console.log(process.env.COLORED_LOGS);
