import fs from 'fs';
import path from 'path'; 

// Поток для логирования посещений
const logStream = fs.createWriteStream('logs/visited.log', { flags: 'a' });

logStream.on('error', (err) => {
    console.error('Stream error in visited.log:', err.message);
});

// Функция для логирования посещений
export const logVisit = (visitData) => {
    const logEntry = `${JSON.stringify(visitData)}\n`;
    logStream.write(logEntry, (err) => {
        if (err) {
            console.error('Error writing to visited.log:', err.message);
        }
    });
};

// Поток для логирования ошибок
export const errorLogStream = fs.createWriteStream(
    path.join('logs', 'errors.log'), 
    { flags: 'a' } 
);

errorLogStream.on('error', (err) => {
    console.error('Stream error in errors.log:', err.message);
});

export { logStream };
