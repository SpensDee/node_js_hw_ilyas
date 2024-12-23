import { errorLogStream } from '../streams.js'; // Подключаем поток для записи ошибок
import logger from '../utils/logger.js'; // Кастомный логгер (опционально)

const errorHandler = (err, req, res, next) => {
    const logMessage = JSON.stringify({
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.url,
        message: err.message,
        stack: err.stack,
    }) + '\n';

    logger.error(err.stack, `[${req.method}] ${req.url} - Error: ${err.message}`);

    errorLogStream.write(logMessage, (streamErr) => {
        if (streamErr) {
            console.error('Error writing to errors.log:', streamErr.message);
        }
    });

    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

export default errorHandler;
